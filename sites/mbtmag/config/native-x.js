const NativeXConfiguration = require('@base-cms/marko-web-native-x/config');

const config = new NativeXConfiguration('https://indm.native-x.io');

config
  .setAliasPlacements('default', [
  //   { name: 'card', id: '5cdb230339937800010ea6ca' },
  //   { name: 'list2', id: '5cdb2308f41dfb0001fce77f' },
  //   { name: 'list1', id: '5cdb230ef41dfb0001fce866' },
  // ])
  // .setAliasPlacements('fiber-optics', [
  //   { name: 'card', id: '5cdb235d39937800010eb580' },
  //   { name: 'list2', id: '5cdb236339937800010eb685' },
  //   { name: 'list1', id: '5cdb2369f41dfb0001fcf737' },
  ]);

module.exports = config;
