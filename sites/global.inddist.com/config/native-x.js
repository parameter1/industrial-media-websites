const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://indm.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032aa4ee7c97d00010786e7' },
  ]);

module.exports = config;
