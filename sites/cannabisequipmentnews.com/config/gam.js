const configureGAM = require('@industrial-media/package-shared/config/gam');

const config = configureGAM({ basePath: '' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'CEN-SL' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'CEN-SL' },
    { name: 'rail1', templateName: 'RAIL1', path: 'CEN-MR' },
    { name: 'rail2', templateName: 'RAIL2', path: 'CEN-MR' },

    { name: 'billboard1', templateName: 'BILLBOARD', path: 'CEN970x250' },

    { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'CEN-MR' },
    { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'CEN-MR' },
    { name: 'in-content', templateName: 'IN-CONTENT', path: 'CEN-MR' },

    { name: 'reskin', path: 'CEN-Reskin' },
    { name: 'wa', path: 'default_wa' },
  ]);

module.exports = config;
