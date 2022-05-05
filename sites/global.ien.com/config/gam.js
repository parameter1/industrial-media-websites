const configureGAM = require('@industrial-media/package-global/config/gam');

const config = configureGAM({ basePath: 'IEN' });

config
  .setAliasAdUnits('default', [
    // { name: 'lb1', templateName: 'LB', path: 'default_lb1' },
    // { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'default_lb1' },
    // { name: 'billboard1', templateName: 'BILLBOARD', path: 'default_billboard' },
    // { name: 'rail1', templateName: 'RAIL1', path: 'default_rail1' },
    // { name: 'rail2', templateName: 'RAIL2', path: 'default_rail1' },
    // { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'default_rail1' },
    // { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'default_rail1' },
    // { name: 'in-content', templateName: 'IN-CONTENT', path: 'default_rail1' },
    // { name: 'reskin', path: 'default_reskin' },
    // { name: 'wa', path: 'default_wa' },
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'default_lb1' },
    { name: 'rotation', templateName: 'ROTATION', path: 'default_lb1' },
    { name: 'load-more', templateName: 'RAIL', path: 'default_rail1' },
    { name: 'inline-content-mobile', templateName: 'RAIL', path: 'default_rail1' },
    { name: 'inline-content-desktop', templateName: 'RAIL', path: 'default_rail1' },
    { name: 'reskin', path: 'default_reskin' },
  ]);

module.exports = config;
