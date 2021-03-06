const { withContent } = require('@parameter1/base-cms-marko-web/middleware');
const content = require('@industrial-media/package-shared/templates/content');
const queryFragment = require('@industrial-media/package-shared/graphql/fragments/content-page');
const { loaderQueryFragment, formatResponse } = require('@industrial-media/package-shared/leads-content-handler');

module.exports = (app) => {
  app.get('/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)', withContent({
    template: content,
    queryFragment,
    loaderQueryFragment,
    formatResponse,
  }));
};
