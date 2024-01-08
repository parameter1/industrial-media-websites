const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6227908c1521b0000170b22d' },
    { name: 'related-content', id: '6227908c1521b0000170b22d' },
  ])
  .setAliasPlacements('cardiovascular', [
    { name: 'related-content', id: '65985e732b6b780001123afd' },
  ])
  .setAliasPlacements('devices', [
    { name: 'related-content', id: '65985ed72b6b780001123ba6' },
  ])
  .setAliasPlacements('equipment', [
    { name: 'related-content', id: '65985f0f2b6b780001123c13' },
  ])
  .setAliasPlacements('imaging', [
    { name: 'related-content', id: '65985f353072e90001c49465' },
  ])
  .setAliasPlacements('implantables', [
    { name: 'related-content', id: '65985f642b6b780001123cd6' },
  ])
  .setAliasPlacements('new-products', [
    { name: 'related-content', id: '65985f853072e90001c4952c' },
  ])
  .setAliasPlacements('oncology', [
    { name: 'related-content', id: '65985fbd2b6b780001123d7c' },
  ])
  .setAliasPlacements('surgical', [
    { name: 'related-content', id: '65985fd93072e90001c495ef' },
  ]);

module.exports = config;
