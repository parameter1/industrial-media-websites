const defineDisplayAd = require('@parameter1/base-cms-marko-web-theme-monorail/components/gam/components/define-display-ad');
const { dasherize } = require('@parameter1/base-cms-inflector');

module.exports = ({
  req, res, site, adUnit,
}) => defineDisplayAd.renderToString({
  $global: {
    req,
    res,
    site,
  },
  ...adUnit,
  name: 'brightcove',
  targeting: {},
  aliases: [],
  modifiers: [
    'inter-block',
    'with-label',
    ...(adUnit.templateName && [
      `template-${dasherize(adUnit.templateName)}`,
    ]),
  ],
  collapseBeforeAdFetch: true,
  withWrapper: true,
  oop: true,
});
