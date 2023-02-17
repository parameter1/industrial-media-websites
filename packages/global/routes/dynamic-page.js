const { withDynamicPage } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/dynamic-page');
const page = require('../templates/dynamic-page/index');
const contactUs = require('../templates/dynamic-page/contact-us');

module.exports = (app) => {
  app.get('/page/:alias(contact-us)', withDynamicPage({
    template: contactUs,
    queryFragment,
  }));

  app.get('/page/:alias([\\w\\d-]{1,})', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
