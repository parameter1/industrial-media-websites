const configureIdentityX = require('@industrial-media/package-global/config/identity-x');
const formDefault = require('@industrial-media/package-global/config/identity-x/default');

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

module.exports = configureIdentityX({
  comments: { enabled: false },
  appContextId: '5e83669a6eabae9f989e63c4',
  requiredClientFields: [
    'givenName',
    'familyName',
    'organization',
    'countryCode',
    '60104e959fdc650033d91e91',
    '6575cf1827f0a7b1c503cd24',
  ],
  activeCustomFieldIds: [
    '60104e959fdc650033d91e91',
    '6575cf1827f0a7b1c503cd24',
    '65b90c2eb4946d06112cf501',
    '65b90b1ab4946d38962cd8df',
    '65b90c7af22eb7010672eeab',
    '65b90e13abfae4b94ee7a66c',
  ],
  gtmUserFields: {
    job_title: '60104e959fdc650033d91e91',
    primary_business: '6575cf1827f0a7b1c503cd24',
  },
  forms: {
    default: formDefault,
  },
});
