const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032ab162a687f00014eea66' },
    { name: 'related-content', id: '6032ab162a687f00014eea66' },
  ])
  .setAliasPlacements('artificial-intelligence', [
    { name: 'related-content', id: '603aa32f0057fb0001ef6b6c' },
  ])
  .setAliasPlacements('cloud-computing', [
    { name: 'related-content', id: '603aa3184a44ce0001690a5e' },
  ])
  .setAliasPlacements('cybersecurity', [
    { name: 'related-content', id: '603aa2b70057fb0001ef673d' },
  ])
  .setAliasPlacements('global', [
    { name: 'related-content', id: '603aa2eb0057fb0001ef68bf' },
  ])
  .setAliasPlacements('industry-4-0', [
    { name: 'related-content', id: '603aa29b4a44ce000169064b' },
  ])
  .setAliasPlacements('operations', [
    { name: 'related-content', id: '603aa2820057fb0001ef657c' },
  ])
  .setAliasPlacements('quality-control', [
    { name: 'related-content', id: '603aa2ff0057fb0001ef6989' },
  ])
  .setAliasPlacements('software', [
    { name: 'related-content', id: '65985e363072e90001c4926b' },
  ]);

module.exports = config;
