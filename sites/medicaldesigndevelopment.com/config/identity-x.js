const configureIdentityX = require('@industrial-media/package-global/config/identity-x');

module.exports = ({ omedaBrandKey }) => configureIdentityX({
  appId: '5e28a3dd58e67b229e55ae43',
  comments: { enabled: false },
  appContextId: '6227857913ad4d2769c59aea',
  omedaBrandKey,
});
