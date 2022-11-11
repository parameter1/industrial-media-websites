const newrelic = require('newrelic');
const { asyncRoute } = require('@parameter1/base-cms-utils');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const htmlSitemapRoutes = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const contactUsHandler = require('@parameter1/base-cms-marko-web-contact-us');
const omedaIdentityX = require('@parameter1/base-cms-marko-web-omeda-identity-x');
const omedaCookie = require('@parameter1/base-cms-marko-web-omeda/olytics/customer-cookie');
const fetch = require('node-fetch');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const sharedRoutes = require('./routes');
const paginated = require('./middleware/paginated');
const stealthLink = require('./routes/stealth-link');
const newsletterState = require('./middleware/newsletter-state');
const redirectHandler = require('./redirect-handler');
const leadsMiddleware = require('./middleware/leads');
const idxRouteTemplates = require('./templates/user');
const oembedHandler = require('./oembed-handler');
const recaptcha = require('./config/recaptcha');
const idxNavItems = require('./config/identity-x-nav');

const { error } = console;

const routes = siteRoutes => (app, siteConfig) => {
  // load contact us route
  contactUsHandler(app);
  // Shared/global routes (all sites)
  sharedRoutes(app, siteConfig);
  // Load site routes
  siteRoutes(app);
  // HTML Sitemap
  htmlSitemapRoutes(app);
  // Stealh Link
  // @TODO: verify that this is still needed
  stealthLink(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  return startServer({
    ...options,
    routes: routes(options.routes, options.siteConfig),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      // Use lead management middleware
      app.use(leadsMiddleware());

      // Use paginated middleware
      app.use(paginated());

      // i18n
      const i18n = v => v;
      set(app.locals, 'i18n', options.i18n || i18n);

      // Use paginated middleware
      app.use(htmlSitemapPagination());

      // Use newsletterState middleware
      const pushdown = get(options, 'siteConfig.newsletter.pushdown');
      if (pushdown && !pushdown.disabled) {
        app.use(newsletterState());
      }

      // Recaptcha
      set(app.locals, 'recaptcha', recaptcha);

      // Use Omeda middleware
      const omedaIdentityXConfig = getAsObject(options, 'siteConfig.omedaIdentityX');
      // set globally to use with omeda olytics calls in document.marko
      set(app.locals, 'omedaConfig', getAsObject(options, 'siteConfig.omeda'));
      omedaIdentityX(app, { ...omedaIdentityXConfig, idxRouteTemplates });
      idxNavItems({ site: app.locals.site });

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      set(app.locals, 'GAM', gamConfig);

      // Setup NativeX.
      const nativeXConfig = get(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', nativeXConfig);

      // Setup IdentityX.
      const identityXConfig = get(options, 'siteConfig.identityX');
      set(app.locals, 'identityX', identityXConfig);

      app.use(asyncRoute(async (req, res, next) => {
        try {
          const { GAM_TRACK_API_KEY } = process.env;
          if (!GAM_TRACK_API_KEY) return next();
          const cookieId = omedaCookie.parseFrom(req);
          const incomingId = omedaCookie.clean(req.query.oly_enc_id);
          const encryptedId = incomingId || cookieId;
          if (!encryptedId) return next();
          const { brandKey } = getAsObject(options, 'siteConfig.omeda');
          if (!brandKey) return next();

          const r = await fetch('https://api.gt.parameter1.dev', {
            method: 'POST',
            headers: { 'content-type': 'application/json', 'x-api-key': GAM_TRACK_API_KEY },
            body: JSON.stringify({
              action: 'encrypt',
              params: {
                identities: [{
                  provider: 'omeda',
                  tenant: brandKey,
                  entityType: 'customer',
                  id: encryptedId,
                  idType: 'encrypted',
                }],
              },
            }),
          });
          if (!r.ok) throw new Error('Bad fetch response');
          const { data } = await r.json();
          set(res.locals, 'gamTrackTargeting', data);
          return next();
        } catch (e) {
          // @todo log this, don't break the request.
          error('GAM TRACKER ERROR!', e);
          return next();
        }
      }));
    },
    onAsyncBlockError: e => newrelic.noticeError(e),

    redirectHandler,

    embeddedMediaHandlers: {
      oembed: oembedHandler,
    },
  });
};
