const { withDynamicPage } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@parameter1/base-cms-marko-web-theme-monorail/graphql/fragments/dynamic-page');
const page = require('../templates/dynamic-page/contact-us');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withDynamicPage({
    template: page,
    queryFragment,
  }));

  app.get('/page/:alias([\\w\\d-]{1,})', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
