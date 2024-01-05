const configureGAM = require('@industrial-media/package-global/config/gam');

const config = configureGAM({ basePath: 'mdd' });

config
  .setAliasAdUnits('default', [
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'default_lb' },
    { name: 'billboard', templateName: 'BILLBOARD', path: 'default_billboard' },
    { name: 'rotation', templateName: 'ROTATION', path: 'default_rotation' },
    { name: 'load-more', templateName: 'ROTATION', path: 'default_rotation' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'default_rotation' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'default_rotation' },
    { name: 'reskin', path: 'default_reskin' },
    { name: 'brightcove', path: 'default_brightcove' },
  ]);

module.exports = config;
