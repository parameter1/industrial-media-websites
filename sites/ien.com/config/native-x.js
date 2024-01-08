const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032a882e7c97d000107867f' },
    { name: 'related-content', id: '6032a882e7c97d000107867f' },
  ])
  .setAliasPlacements('supply-chain', [
    { name: 'related-content', id: '603aa11f0057fb0001ef5981' },
  ])
  .setAliasPlacements('software', [
    { name: 'related-content', id: '603aa1064a44ce000168f884' },
  ])
  .setAliasPlacements('safety', [
    { name: 'related-content', id: '603aa0e24a44ce000168f73a' },
  ])
  .setAliasPlacements('product-development', [
    { name: 'related-content', id: '603aa0be4a44ce000168f61e' },
  ])
  .setAliasPlacements('operations', [
    { name: 'related-content', id: '603aa0a10057fb0001ef54d2' },
  ])
  .setAliasPlacements('new-products', [
    { name: 'related-content', id: '603aa0874a44ce000168f3bb' },
  ])
  .setAliasPlacements('made-in-america', [
    { name: 'related-content', id: '603aa03c0057fb0001ef5232' },
  ])
  .setAliasPlacements('finishing-world', [
    { name: 'related-content', id: '603aa0210057fb0001ef514d' },
  ])
  .setAliasPlacements('automation', [
    { name: 'related-content', id: '603aa0080057fb0001ef503a' },
  ])
  .setAliasPlacements('artificial-intelligence', [
    { name: 'related-content', id: '65985b0b2b6b780001123478' },
  ]);

module.exports = config;
