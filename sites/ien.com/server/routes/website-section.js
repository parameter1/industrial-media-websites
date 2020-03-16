const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('@industrial-media/package-shared/templates/website-section');
const queryFragment = require('@industrial-media/package-shared/graphql/fragments/website-section-page');

module.exports = (app) => {
  // app.get('/:alias(contact-us)', withWebsiteSection({
  //   template: contactUs,
  //   queryFragment,
  // }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
