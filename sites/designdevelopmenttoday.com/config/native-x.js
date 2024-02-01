const configureNativeX = require('@industrial-media/package-global/config/native-x');

const config = configureNativeX();

config
  .setAliasPlacements('default', [
    { name: 'default', id: '6032aa80e7c97d0001078716' },
    { name: 'related-content', id: '6032aa80e7c97d0001078716' },
  ])
  .setAliasPlacements('industries/aerospace', [
    { name: 'related-content', id: '6039afe4e7c97d00013d963b' },
  ])
  .setAliasPlacements('industries/automotive', [
    { name: 'related-content', id: '6039b0042a687f000184f854' },
  ])
  .setAliasPlacements('exclusives', [
    { name: 'related-content', id: '6039afb2e7c97d00013d949a' },
  ])
  .setAliasPlacements('industries/manufacturing', [
    { name: 'related-content', id: '6039b024e7c97d00013d98e9' },
  ])
  .setAliasPlacements('industries/medical', [
    { name: 'related-content', id: '6039b042e7c97d00013d9a64' },
  ])
  .setAliasPlacements('industries/military', [
    { name: 'related-content', id: '6039b066e7c97d00013d9c31' },
  ])
  .setAliasPlacements('new-products', [
    { name: 'related-content', id: '6039b081e7c97d00013d9d7f' },
  ])
  .setAliasPlacements('news', [
    { name: 'related-content', id: '6039b095e7c97d00013d9e71' },
  ]);
  // .setAliasPlacements('video', [
  //   { name: 'related-content', id: '6039b0b2e7c97d00013d9fd6' },
  // ]);

module.exports = config;
