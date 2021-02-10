const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@industrial-media/package-shared/graphql/fragments/website-section-page');

const home = require('../templates/index');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    // Replace with ID resolver or website domain something
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
