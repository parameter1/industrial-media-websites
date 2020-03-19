const configureGAM = require('@industrial-media/package-shared/config/gam');

const config = configureGAM({ basePath: '' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'DDT-SL' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'DDT-SL' },
    { name: 'rail1', templateName: 'RAIL1', path: 'DDT-MR' },
    { name: 'rail2', templateName: 'RAIL2', path: 'DDT-MR' },

    { name: 'billboard1', templateName: 'BILLBOARD', path: 'DDT970x250' },

    { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'DDT-MR' },
    { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'DDT-MR' },
    { name: 'in-content', templateName: 'IN-CONTENT', path: 'DDT-MR' },

    { name: 'reskin', path: 'DDT-Reskin' },
    { name: 'wa', path: 'default_wa' },
  ]);

module.exports = config;
