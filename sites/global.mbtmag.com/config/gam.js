const configureGAM = require('@industrial-media/package-global/config/gam');

const config = configureGAM({ basePath: 'MBT' });

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'default_lb1' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'default_lb1' },
    // 300x250 that loads in the tops stories block on section & homepages
    { name: 'top-stories', templateName: 'RAIL', path: 'default_rail1' },
    { name: 'load-more', templateName: 'RAIL', path: 'default_rail1' },
    { name: 'inline-content-mobile', templateName: 'INLINE-CONTENT-MOBILE', path: 'default_rail1' },
    { name: 'inline-content-desktop', templateName: 'INLINE-CONTENT-DESKTOP', path: 'default_rail1' },
    { name: 'reskin', path: 'default_reskin' },
  ]);

module.exports = config;
