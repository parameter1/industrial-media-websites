const gql = require('graphql-tag');
const newrelic = require('newrelic');
const { startServer } = require('@parameter1/base-cms-marko-web');
const { set, get, getAsObject } = require('@parameter1/base-cms-object-path');
const contactUsHandler = require('@industrial-media/package-contact-us');
const htmlSitemapPagination = require('@parameter1/base-cms-marko-web-html-sitemap/middleware/paginated');
const htmlSitemapRoutes = require('@parameter1/base-cms-marko-web-html-sitemap/routes');

const buildNativeXConfig = require('./native-x/build-config');

const document = require('./components/document');
const components = require('./components');
const fragments = require('./fragments');
const userRoutes = require('./routes/user');
const stealthLink = require('./routes/stealth-link');
const leadsMiddleware = require('./middleware/leads');
const omeda = require('./config/omeda');

const routes = siteRoutes => (app) => {
  // Handle contact submissions on /__contact-us
  contactUsHandler(app);
  // Load user routes.
  userRoutes(app);
  // HTML Sitemap
  htmlSitemapRoutes(app);
  // Stealh Link
  stealthLink(app);
  // Load site routes.
  siteRoutes(app);
};

module.exports = (options = {}) => {
  const { onStart } = options;
  const nativeXConfig = getAsObject(options, 'siteConfig.nativeX');
  return startServer({
    ...options,
    routes: routes(options.routes),
    document: options.document || document,
    components: options.components || components,
    fragments: options.fragments || fragments,
    onStart: async (app) => {
      if (typeof onStart === 'function') await onStart(app);
      app.set('trust proxy', 'loopback, linklocal, uniquelocal');

      // Setup GAM.
      const gamConfig = get(options, 'siteConfig.gam');
      if (gamConfig) set(app.locals, 'GAM', gamConfig);

      // Use Omeda middleware
      const omedaBrandKey = get(options, 'siteConfig.omedaBrandKey');
      const omedaConfig = omeda(omedaBrandKey);
      set(app.locals, 'omedaConfig', omedaConfig);

      // Setup NativeX.
      set(app.locals, 'nativeX', buildNativeXConfig(nativeXConfig));

      // Use lead management middleware
      app.use(leadsMiddleware());

      // Use paginated middleware
      app.use(htmlSitemapPagination());
    },
    onAsyncBlockError: e => newrelic.noticeError(e),

    redirectHandler: async ({ from, params, req }) => {
      // attempt to match a redirect from _another_ site
      const { apollo } = req;
      const query = gql`
        query WebsiteRedirect($input: WebsiteRedirectQueryInput!) {
          websiteRedirect(input: $input) {
            to
            code
          }
        }
      `;
      const input = { from, params, siteQueryOperator: 'notEqual' };
      const { data } = await apollo.query({ query, variables: { input } });
      const { websiteRedirect } = data;
      const { to } = websiteRedirect || {};
      return to ? websiteRedirect : null;
    },
  });
};
