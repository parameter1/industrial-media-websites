const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://indm.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032aa6ce7c97d00010786fa' },
  ]);

module.exports = config;
