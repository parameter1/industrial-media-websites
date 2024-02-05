const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032ab022a687f00014eea53' },
    { name: 'related-content', id: '6032ab022a687f00014eea53' },
  ])
  .setAliasPlacements('supply-chain', [
    { name: 'related-content', id: '603aa4760057fb0001ef732e' },
  ])
  .setAliasPlacements('software', [
    { name: 'related-content', id: '603aa4620057fb0001ef72af' },
  ])
  .setAliasPlacements('operations', [
    { name: 'related-content', id: '603aa44c0057fb0001ef7228' },
  ])
  .setAliasPlacements('industry40', [
    { name: 'related-content', id: '603aa4224a44ce000169108b' },
  ])
  .setAliasPlacements('energy', [
    { name: 'related-content', id: '603aa4094a44ce0001690ff0' },
  ])
  .setAliasPlacements('cybersecurity', [
    { name: 'related-content', id: '603aa4384a44ce0001691124' },
  ])
  .setAliasPlacements('automotive', [
    { name: 'related-content', id: '603aa3f10057fb0001ef6fe8' },
  ])
  .setAliasPlacements('aerospace', [
    { name: 'related-content', id: '603aa3dd0057fb0001ef6f4a' },
  ])
  .setAliasPlacements('artificial-intelligence', [
    { name: 'related-content', id: '65bbd7b23072e90001db3dec' }
  ]);

module.exports = config;
