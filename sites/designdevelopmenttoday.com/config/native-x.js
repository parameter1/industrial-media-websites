const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032aa80e7c97d0001078716' },
    { name: 'related-content', id: '6032aa80e7c97d0001078716' },
  ])
  .setAliasPlacements('industries/aerospace', [
    { name: 'related-content', id: '6039afdd2a687f000184f6ef' },
  ])
  .setAliasPlacements('industries/automotive', [
    { name: 'related-content', id: '6039affee7c97d00013d9728' },
  ])
  .setAliasPlacements('exclusives', [
    { name: 'related-content', id: '6039afa92a687f000184f525' },
  ])
  .setAliasPlacements('industries/manufacturing', [
    { name: 'related-content', id: '6039b01de7c97d00013d9896' },
  ])
  .setAliasPlacements('industries/medical', [
    { name: 'related-content', id: '6039b03ae7c97d00013d99ec' },
  ])
  .setAliasPlacements('industries/military', [
    { name: 'related-content', id: '6039b05a2a687f000184fc46' },
  ])
  .setAliasPlacements('new-products', [
    { name: 'related-content', id: '6039b07a2a687f000184fdfd' },
  ])
  .setAliasPlacements('news', [
    { name: 'related-content', id: '6039b08fe7c97d00013d9e1a' },
  ])
  .setAliasPlacements('video', [
    { name: 'related-content', id: '6039b0a7e7c97d00013d9f68' },
  ]);

module.exports = config;
