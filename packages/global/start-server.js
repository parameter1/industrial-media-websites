const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const contactUsHandler = require('@parameter1/base-cms-marko-web-contact-us');
const omedaIdentityX = require('@parameter1/base-cms-marko-web-omeda-identity-x');
const odentityCustomerUpsert = require('@parameter1/base-cms-marko-web-omeda/odentity/upsert-customer');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const sharedRoutes = require('./routes');
const paginated = require('./middleware/paginated');
const newsletterState = require('./middleware/newsletter-state');
const redirectHandler = require('./redirect-handler');
const idxRouteTemplates = require('./templates/user');
const oembedHandler = require('./oembed-handler');
const omeda = require('./config/omeda');

const routes = siteRoutes => (app, siteConfig) => {
  // Shared/global routes (all sites)
  sharedRoutes(app, siteConfig);
  // Load site routes
  siteRoutes(app);
  // load contact us route
  contactUsHandler(app);
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

      // Use paginated middleware
      app.use(paginated());

      // i18n
      const i18n = v => v;
      set(app.locals, 'i18n', options.i18n || i18n);

      // Use paginated middleware
      app.use(htmlSitemapPagination());

      // Use newsletterState middleware
      app.use(newsletterState());

      // Use Omeda middleware
      const omedaBrandKey = get(options, 'siteConfig.omedaBrandKey');
      const omedaConfig = omeda(omedaBrandKey);
      set(app.locals, 'omedaConfig', omedaConfig);
      const idxConfig = getAsObject(options, 'siteConfig.identityX');
      omedaIdentityX(app, {
        brandKey: omedaConfig.brandKey,
        clientKey: omedaConfig.clientKey,
        appId: omedaConfig.appId,
        inputId: omedaConfig.inputId,
        rapidIdentProductId: get(omedaConfig, 'rapidIdentification.productId'),
        idxConfig,
        idxRouteTemplates,
      });

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      set(app.locals, 'GAM', gamConfig);

      // Setup NativeX.
      const nativeXConfig = get(options, 'siteConfig.nativeX');
      set(app.locals, 'nativeX', nativeXConfig);

      // Setup IdentityX.
      const identityXConfig = get(options, 'siteConfig.identityX');
      set(app.locals, 'identityX', identityXConfig);

      // Omeda customer upsert
      app.use(odentityCustomerUpsert({
        brandKey: omedaConfig.brandKey,
        onError: newrelic.noticeError.bind(newrelic),
      }));
    },
    onAsyncBlockError: e => newrelic.noticeError(e),

    redirectHandler,

    embeddedMediaHandlers: {
      oembed: oembedHandler,
    },
  });
};
