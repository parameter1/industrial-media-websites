const contentMetering = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/content-metering');
const { newsletterState, formatContentResponse } = require('@industrial-media/package-global/middleware/newsletter-state');
const withContent = require('@industrial-media/package-global/middleware/with-content');
const qf = require('@industrial-media/package-global/graphql/fragments/content-page');
const company = require('@industrial-media/package-global/templates/content/company');
const content = require('@industrial-media/package-global/templates/content');

module.exports = (app) => {
  const { site } = app.locals;
  const useLinkInjectedBody = site.get('useLinkInjectedBody');
  const queryFragment = qf.factory ? qf.factory({ useLinkInjectedBody }) : qf;
  const routesList = [
    { // company
      regex: '/*?company/:id(\\d{8})*',
      template: company,
      queryFragment,
    },
    { // default
      regex: '/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)*',
      template: content,
      queryFragment,
      withContentMeter: true,
    },
  ];
  const cmConfig = site.getAsObject('contentMeter');
  const contentMeterEnable = cmConfig.enabled;
  // determin to use newsletterstate or contentMeter middleware
  routesList.forEach((route) => {
    if (route.withContentMeter && contentMeterEnable) {
      app.get(
        route.regex,
        newsletterState({ setCookie: false }),
        contentMetering(cmConfig),
        withContent({
          template: route.template,
          queryFragment: route.queryFragment,
          formatResponse: formatContentResponse,
        }),
      );
    } else {
      app.get(route.regex, newsletterState({ setCookie: false }), withContent({
        template: route.template,
        queryFragment: route.queryFragment,
        formatResponse: formatContentResponse,
      }));
    }
  });
};
