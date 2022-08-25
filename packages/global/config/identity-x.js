const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');
const newrelic = require('newrelic');

module.exports = ({
  appId,
  hiddenFields = [],
  defaultCountryCode,
  comments = { enabled: false },
  requiredServerFields = [],
  requiredClientFields = [],
  ...rest
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    defaultCountryCode,
    hiddenFields,
    requiredServerFields,
    requiredClientFields,
    onHookError: newrelic.noticeError.bind(newrelic),
    ...rest,
  });
  config.comments = comments;
  return config;
};
