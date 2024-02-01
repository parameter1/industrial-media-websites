const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032aa4ee7c97d00010786e7' },
    { name: 'related-content', id: '6032aa4ee7c97d00010786e7' },
  ])
  .setAliasPlacements('workforce-development', [
    { name: 'related-content', id: '603aa5e60057fb0001ef7f4c' },
  ])
  .setAliasPlacements('supply-chain', [
    { name: 'related-content', id: '603aa5ce4a44ce0001691dd9' },
  ])
  .setAliasPlacements('staffing-changes', [
    { name: 'related-content', id: '603aa5b30057fb0001ef7d74' },
  ])
  .setAliasPlacements('sales', [
    { name: 'related-content', id: '603aa59b0057fb0001ef7c34' },
  ])
  .setAliasPlacements('operations', [
    { name: 'related-content', id: '603aa5860057fb0001ef7b1a' },
  ])
  .setAliasPlacements('mergers-aquisitions', [
    { name: 'related-content', id: '603aa5390057fb0001ef7911' },
  ])
  .setAliasPlacements('economy', [
    { name: 'related-content', id: '603aa5194a44ce00016917d5' },
  ])
  .setAliasPlacements('business-technology', [
    { name: 'related-content', id: '603aa4e24a44ce00016915a9' },
  ])
  .setAliasPlacements('big-50', [
    { name: 'related-content', id: '603aa4cc0057fb0001ef7542' },
  ])
  .setAliasPlacements('new-products', [
    { name: 'related-content', id: '65bbce623072e90001db3644' },
  ]);
  // .setAliasPlacements('5-minutes-with-id', [
  //   { name: 'related-content', id: '65bbcee83072e90001db369a' },
  // ])

module.exports = config;
