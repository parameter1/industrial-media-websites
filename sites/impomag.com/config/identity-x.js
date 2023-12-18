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
  appContextId: '5e8366d0da9f2201fa6852b7',
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
    '657cad502abe211e9ea0c86f',
  ],
  forms: {
    default: formDefault,
  },
});
