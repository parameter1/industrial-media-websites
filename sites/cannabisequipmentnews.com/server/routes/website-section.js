const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const section = require('@industrial-media/package-shared/templates/website-section');
const contactUs = require('@industrial-media/package-shared/templates/website-section/contact-us');
const queryFragment = require('@industrial-media/package-shared/graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));

  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
