const home = require('./home');
const content = require('./content');
const dynamicPages = require('./dynamic-page');
const magazine = require('./magazine');
const search = require('./search');
const websiteSections = require('./website-section');

module.exports = (app) => {
  // Homepage
  home(app);

  // Magazine Pages
  magazine(app);

  // Dynamic Pages
  dynamicPages(app);

  // Content Pages
  content(app);

  // Search
  search(app);

  // Website Sections
  websiteSections(app);
};
