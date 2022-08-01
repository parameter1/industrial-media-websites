const redirects = require('./redirects');
const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Redirects
  redirects(app);

  // Homepage
  home(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
