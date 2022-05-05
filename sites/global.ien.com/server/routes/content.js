const withContent = require('@industrial-media/package-global/middleware/with-content');
const queryFragment = require('@industrial-media/package-global/graphql/fragments/content-page');
const contact = require('@industrial-media/package-global/templates/content/contact');
const company = require('@industrial-media/package-global/templates/content/company');
const content = require('../templates/content');

module.exports = (app) => {
  app.get('/*?contact/:id(\\d{8})*', withContent({
    template: contact,
    queryFragment,
  }));

  app.get('/*?company/:id(\\d{8})*', withContent({
    template: company,
    queryFragment,
  }));

  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
