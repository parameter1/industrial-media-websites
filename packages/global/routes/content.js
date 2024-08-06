const contentMetering = require('@parameter1/base-cms-marko-web-theme-monorail/middleware/content-metering');

const { newsletterState, formatContentResponse } = require('../middleware/newsletter-state');
const withContent = require('../middleware/with-content');
const standardQF = require('../graphql/fragments/content-page');
const leadersQF = require('../graphql/fragments/content-page-with-leader-info');
const company = require('../templates/content/company');
const content = require('../templates/content');

module.exports = (app) => {
  const { site } = app.locals;
  const useLinkInjectedBody = site.get('useLinkInjectedBody');
  const companyQF = site.get('leaders.enabled') && site.get('leaders.alias') ? standardQF : leadersQF.factory({ useLinkInjectedBody, leadersAlias: site.get('leaders.alias') });
  console.log('hitting content rouyte: ', companyQF, site, site.get('leaders'));
  const routesList = [
    { // company
      regex: '/*?company/:id(\\d{8})*',
      template: company,
      queryFragment: companyQF,
    },
    { // default
      regex: '/*?/:id(\\d{8})/*|/:id(\\d{8})(/|$)*',
      template: content,
      queryFragment: standardQF,
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
