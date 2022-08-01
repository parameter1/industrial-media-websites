const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://indm.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6227908c1521b0000170b22d' },
  ]);

module.exports = config;
