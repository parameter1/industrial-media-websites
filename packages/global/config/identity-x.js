const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');
const newrelic = require('newrelic');

module.exports = ({
  appId = '5e28a3dd58e67b229e55ae43',
  hiddenFields = [
    'organizationTitle', // @todo make this a custom field somehow
    'phoneNumber',
    'street',
    'city',
    'regionCode', // Only require client-side for non-us/ca
    'postalCode', // Only require client-side for non-us/ca
  ],
  defaultCountryCode = '',
  comments = { enabled: false },
  requiredServerFields = [
    'givenName',
    'familyName',
    'organization',
    'countryCode',
  ],
  requiredClientFields = [
    'givenName',
    'familyName',
    'organization',
    'countryCode',
  ],
  gtmUserFields = {
    primary_business: '60104e959fdc650033d91e91',
    job_title: '6575cf1827f0a7b1c503cd24',
  },
  booleanQuestionsLabel = 'Preferences:',
  ...rest
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    defaultCountryCode,
    hiddenFields,
    requiredServerFields,
    requiredClientFields,
    gtmUserFields,
    onHookError: newrelic.noticeError.bind(newrelic),
    booleanQuestionsLabel,
    ...rest,
  });
  config.comments = comments;
  return config;
};
