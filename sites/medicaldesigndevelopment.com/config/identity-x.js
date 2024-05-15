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
  appContextId: '6227857913ad4d2769c59aea',
  requiredClientFields: [
    'givenName',
    'familyName',
    'organization',
    'countryCode',
    '657b03f46135407e614f1e8b',
    '657b04b76135405c3a4f2a68',
  ],
  activeCustomFieldIds: [
    '657b03f46135407e614f1e8b',
    '657b04b76135405c3a4f2a68',
    '657caa9c2107a73d08eb1dc5',
  ],
  gtmUserFields: {
    job_title: '657b03f46135407e614f1e8b',
    primary_business: '657b04b76135405c3a4f2a68',
  },
  forms: {
    default: formDefault,
  },
});
