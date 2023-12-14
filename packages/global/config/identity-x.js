const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');
const newrelic = require('newrelic');
const formDefault = require('./identity-x/default');

// append custom demos row of questions to the end of general questions
formDefault.fieldRows.push(
  [
    // Demo: Job Title
    {
      label: 'Job Title',
      id: '60104e959fdc650033d91e91',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
    // Demo: Primary Business
    {
      label: 'Primary Business',
      id: '6575cf1827f0a7b1c503cd24',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
  ],
);

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
    '642f689c5377824a6c1b851f',
    '64301b173e81776bd5dc7cd8',
  ],
  forms = {
    default: formDefault,
  },
  gtmUserFields = {
    primary_business: '60104e959fdc650033d91e91',
    job_title: '6575cf1827f0a7b1c503cd24',
  },
  ...rest
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    defaultCountryCode,
    hiddenFields,
    requiredServerFields,
    requiredClientFields,
    forms,
    gtmUserFields,
    onHookError: newrelic.noticeError.bind(newrelic),
    ...rest,
  });
  config.comments = comments;
  return config;
};
