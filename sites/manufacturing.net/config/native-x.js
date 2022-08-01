const NativeXConfiguration = require('@parameter1/base-cms-marko-web-native-x/config');

const config = new NativeXConfiguration('https://indm.native-x.parameter1.com');

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032ab022a687f00014eea53' },
  ]);

module.exports = config;
