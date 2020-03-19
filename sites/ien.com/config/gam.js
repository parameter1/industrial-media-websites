const configureGAM = require('@industrial-media/package-shared/config/gam');

const config = configureGAM({ basePath: '' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'IEN-SL' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'IEN-SL' },
    { name: 'rail1', templateName: 'RAIL1', path: 'IEN-MR' },
    { name: 'rail2', templateName: 'RAIL2', path: 'IEN-MR' },

    { name: 'billboard1', templateName: 'BILLBOARD', path: 'IEN970x250' },

    { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'IEN-MR' },
    { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'IEN-MR' },
    { name: 'in-content', templateName: 'IN-CONTENT', path: 'IEN-MR' },

    { name: 'reskin', path: 'IEN-Reskin' },
    { name: 'wa', path: 'default_wa' },
  ]);

module.exports = config;
