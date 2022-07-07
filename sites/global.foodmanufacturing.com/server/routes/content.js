const withContent = require('@industrial-media/package-global/middleware/with-content');
const queryFragment = require('@industrial-media/package-global/graphql/fragments/content-page');
const company = require('@industrial-media/package-global/templates/content/company');
const content = require('@industrial-media/package-global/templates/content');
const { loaderQueryFragment, formatResponse } = require('@industrial-media/package-global/leads-content-handler');

module.exports = (app) => {
  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment,
    loaderQueryFragment,
    formatResponse,
  }));

  app.get('/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)', withContent({
    template: content,
    queryFragment,
    loaderQueryFragment,
    formatResponse,
  }));
};