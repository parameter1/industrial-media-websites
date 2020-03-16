const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const home = require('@industrial-media/package-shared/templates/index');
const queryFragment = require('@industrial-media/package-shared/graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    // Replace with ID resolver or website domain something
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
