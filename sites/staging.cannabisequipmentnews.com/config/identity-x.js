const configureIdentityX = require('@industrial-media/package-shared/config/identity-x');

module.exports = ({ omedaBrandKey }) => configureIdentityX({
  appId: '5e28a3dd58e67b229e55ae43',
  comments: { enabled: true },
  appContextId: '5e8203df75a0950125baf2b5',
  omedaBrandKey,
});
