const { get } = require('@parameter1/base-cms-object-path');
const htmlSitemap = require('@parameter1/base-cms-marko-web-html-sitemap/routes');
const magazine = require('@parameter1/base-cms-marko-web-theme-monorail-magazine/routes');
const omedaNewsletters = require('@parameter1/base-cms-marko-web-omeda/routes/omeda-newsletters');
const renderBlock = require('@parameter1/base-cms-marko-web-theme-monorail/routes/render-block');
const taxonomy = require('@parameter1/base-cms-marko-web-theme-monorail/routes/taxonomy');
const mindfulPreview = require('@parameter1/base-cms-marko-web-theme-monorail/routes/ad-preview');
const getAdvertisingPostAsNativeStory = require('@parameter1/base-cms-mindful/marko-web/middleware/get-advertising-post-as-native-story');

const advertisingPostTemplate = require('../templates/content/advertising-post');
const dynamicPage = require('./dynamic-page');
const feed = require('./feed');

const printContent = require('./print-content');
const publicFiles = require('./public-files');
const redirects = require('./redirects');
const search = require('./search');
const formstack = require('../templates/formstack');

module.exports = (app, siteConfig) => {
  const namespace = get(siteConfig, 'mindful.namespace');
  mindfulPreview(app, namespace);

  // HTML Sitemap
  htmlSitemap(app);

  // Omeda newsletter signup
  omedaNewsletters(app);

  // Feed
  feed(app);

  app.get('/formstack/:formId([a-z0-9-/_]+)', (req, res) => {
    const { formId } = req.params;
    // @todo: Look into API to get title & description to send to template as well
    return res.marko(formstack, { formId });
  });

  // magazine
  magazine(app);

  // NativeX (Story rendering)
  getAdvertisingPostAsNativeStory(app, {
    route: '/sponsored/:section/:slug/:id',
    tenant: 'indm',
    template: advertisingPostTemplate,
  });

  // Shared Print Content
  printContent(app);

  // Shared Public Files (e.g. ads.txt)
  publicFiles(app);

  // Redirects
  redirects(app);

  // Remote component/block loader
  renderBlock(app);

  // Search routes
  search(app, siteConfig);

  // Taxonomy pages (for handling redirects from old WP sites)
  taxonomy(app);

  // Dynamic Pages
  dynamicPage(app);
};
