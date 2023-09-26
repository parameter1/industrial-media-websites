const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032aa80e7c97d0001078716' },
  ]);

module.exports = config;
