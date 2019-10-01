const GAMConfiguration = require('@base-cms/marko-web-gam/config');

const config = new GAMConfiguration('137873098', { basePath: 'MNET' });

config
  .setTemplate('LB', {
    size: [[970, 250], [970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
    sizeMapping: [
      { viewport: [980, 0], size: [[970, 250], [970, 90], [970, 66], [728, 90]] },
      { viewport: [750, 0], size: [728, 90] },
      { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
    ],
  })
  .setTemplate('CONTENT', { size: [[300, 250], [300, 600]] });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default_lb1' },
    { name: 'lb2', templateName: 'LB', path: 'default_lb2' },
    { name: 'rail1', templateName: 'CONTENT', path: 'default_rail1' },
    { name: 'rail2', templateName: 'CONTENT', path: 'default_rail2' },
    { name: 'load-more', templateName: 'CONTENT', path: 'default_load-more' },
    { name: 'reskin', path: 'default_reskin' },
    { name: 'wa', path: 'default_wa' },
  ]);

module.exports = config;
