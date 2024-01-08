const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032aa95e7c97d0001078732' },
    { name: 'related-content', id: '6032aa95e7c97d0001078732' },
  ])
  .setAliasPlacements('supply-chain', [
    { name: 'related-content', id: '65985b643072e90001c48d6f' },
  ])
  .setAliasPlacements('safety', [
    { name: 'related-content', id: '603a9fd54a44ce000168ed68' },
  ])
  .setAliasPlacements('recall-alerts', [
    { name: 'related-content', id: '603a9fb70057fb0001ef4c87' },
  ])
  .setAliasPlacements('packaging', [
    { name: 'related-content', id: '603a9f770057fb0001ef49e1' },
  ])
  .setAliasPlacements('new-products', [
    { name: 'related-content', id: '603a9f904a44ce000168eaf7' },
  ])
  .setAliasPlacements('labor', [
    { name: 'related-content', id: '603a9f604a44ce000168e8c9' },
  ])
  .setAliasPlacements('labeling', [
    { name: 'related-content', id: '603a9f494a44ce000168e7d0' },
  ])
  .setAliasPlacements('facility', [
    { name: 'related-content', id: '603a9f320057fb0001ef46ca' },
  ])
  .setAliasPlacements('consumer-trends', [
    { name: 'related-content', id: '603a9f1b4a44ce000168e5d7' },
  ])
  .setAliasPlacements('capital-investment', [
    { name: 'related-content', id: '603a9eee0057fb0001ef4428' },
  ]);

module.exports = config;
