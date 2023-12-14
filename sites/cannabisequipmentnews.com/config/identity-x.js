const configureIdentityX = require('@industrial-media/package-global/config/identity-x');
const formDefault = require('@industrial-media/package-global/config/identity-x/default');

// append custom demos row of questions to the end of general questions
formDefault.fieldRows.push(
  [
    // Demo: Job Title
    {
      label: 'Job Title',
      id: '657b03f46135407e614f1e8b',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
    // Demo: Primary Business
    {
      label: 'Primary Business',
      id: '657b04b76135405c3a4f2a68',
      type: 'custom-select',
      required: true,
      width: 0.5,
    },
  ],
);

module.exports = configureIdentityX({
  comments: { enabled: false },
  appContextId: '5e8203df75a0950125baf2b5',
  requiredClientFields: [
    'givenName',
    'familyName',
    'organization',
    'organizationTitle', // @todo make this a custom field somehow
    'street',
    'city',
    'regionCode', // Only require client-side for non-us/ca
    'countryCode',
    'postalCode', // Only require client-side for non-us/ca
    '657b03f46135407e614f1e8b',
    '657b04b76135405c3a4f2a68',
  ],
  activeCustomFieldIds: [
    '657b03f46135407e614f1e8b',
    '657b04b76135405c3a4f2a68',
  ],
  forms: {
    default: formDefault,
  },
});
