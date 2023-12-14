const configureIdentityX = require('@industrial-media/package-global/config/identity-x');

module.exports = configureIdentityX({
  comments: { enabled: false },
  appContextId: '5e8203df75a0950125baf2b5',
  requiredClientFields: [
    'givenName',
    'familyName',
    'organization',
    'countryCode',
    '657b03f46135407e614f1e8b',
    '657b04b76135405c3a4f2a68',
  ],
});
