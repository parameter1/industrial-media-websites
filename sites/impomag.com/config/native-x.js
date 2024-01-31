const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032aaaf2a687f00014eea40' },
    { name: 'related-content', id: '6032aaaf2a687f00014eea40' },
  ])
  .setAliasPlacements('training-development', [
    { name: 'related-content', id: '603aa24e4a44ce00016901dd' },
  ])
  .setAliasPlacements('safety', [
    { name: 'related-content', id: '603aa22e4a44ce00016900b1' },
  ])
  .setAliasPlacements('products', [
    { name: 'related-content', id: '603aa2140057fb0001ef5ffb' },
  ])
  .setAliasPlacements('operations', [
    { name: 'related-content', id: '603aa2014a44ce000168ff12' },
  ])
  .setAliasPlacements('material-handling', [
    { name: 'related-content', id: '603aa1e04a44ce000168fe6a' },
  ])
  .setAliasPlacements('maintenance', [
    { name: 'related-content', id: '603aa1c54a44ce000168fd12' },
  ])
  .setAliasPlacements('inventory-management', [
    { name: 'related-content', id: '603aa1a94a44ce000168fc4a' },
  ]);

module.exports = config;
