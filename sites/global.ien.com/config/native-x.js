const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://indm.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032a882e7c97d000107867f' },
  ]);

module.exports = config;
