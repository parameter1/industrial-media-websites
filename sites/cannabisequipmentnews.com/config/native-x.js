const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032aa6ce7c97d00010786fa' },
    { name: 'related-content', id: '6032aa6ce7c97d00010786fa' },
  ])
  .setAliasPlacements('extraction', [
    { name: 'related-content', id: '6039add72a687f000184e537' },
  ])
  .setAliasPlacements('distribution', [
    { name: 'related-content', id: '6039ad66e7c97d00013d7e16' },
  ])
  .setAliasPlacements('cultivation', [
    { name: 'related-content', id: '6039ad3fe7c97d00013d7c92' },
  ])
  .setAliasPlacements('manufacturing', [
    { name: 'related-content', id: '6039ad242a687f000184dc7f' },
  ])
  .setAliasPlacements('processing', [
    { name: 'related-content', id: '6039ad0c2a687f000184db90' },
  ])
  .setAliasPlacements('packaging', [
    { name: 'related-content', id: '6039acf52a687f000184dac5' },
  ])
  .setAliasPlacements('new-products', [
    { name: 'related-content', id: '6039acba2a687f000184d875' },
  ])
  .setAliasPlacements('news', [
    { name: 'related-content', id: '6039ac7ae7c97d00013d7552' },
  ]);

module.exports = config;
