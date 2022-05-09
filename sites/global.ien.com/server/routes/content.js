const withContent = require('@industrial-media/package-global/middleware/with-content');
const queryFragment = require('@industrial-media/package-global/graphql/fragments/content-page');
const { loaderQueryFragment, formatResponse } = require('@industrial-media/package-global/leads-content-handler');
const content = require('../templates/content');


module.exports = (app) => {
  app.get('/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)', withContent({
    template: content,
    queryFragment,
    loaderQueryFragment,
    formatResponse,
  }));
};
