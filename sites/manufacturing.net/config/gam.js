const configureGAM = require('@industrial-media/package-shared/config/gam');

const config = configureGAM({ basePath: 'MNET' });

config
  .setAliasAdUnits('default', [
    { name: 'lb1', templateName: 'LB', path: 'default_lb1' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'default_lb1' },
    { name: 'billboard1', templateName: 'BILLBOARD', path: 'default_billboard' },
    { name: 'rail1', templateName: 'RAIL1', path: 'default_rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'default_rail1' },
    { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'default_rail1' },
    { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'default_rail1' },
    { name: 'in-content', templateName: 'IN-CONTENT', path: 'default_rail1' },
    { name: 'reskin', path: 'default_reskin' },
    { name: 'wa', path: 'default_wa' },
  ])
  .setAliasAdUnits('industry40', [
    { name: 'lb1', templateName: 'LB', path: 'industry40_lb1' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'industry40_lb1' },
    { name: 'billboard1', templateName: 'BILLBOARD', path: 'industry40_billboard' },
    { name: 'rail1', templateName: 'RAIL1', path: 'industry40_rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'industry40_rail1' },
    { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'industry40_rail1' },
    { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'industry40_rail1' },
    { name: 'in-content', templateName: 'IN-CONTENT', path: 'industry40_rail1' },
    { name: 'reskin', path: 'industry40_reskin' },
    { name: 'wa', path: 'industry40_wa' },
  ])
  .setAliasAdUnits('supply-chain', [
    { name: 'lb1', templateName: 'LB', path: 'supply-chain_lb1' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'supply-chain_lb1' },
    { name: 'billboard1', templateName: 'BILLBOARD', path: 'supply-chain_billboard' },
    { name: 'rail1', templateName: 'RAIL1', path: 'supply-chain_rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'supply-chain_rail1' },
    { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'supply-chain_rail1' },
    { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'supply-chain_rail1' },
    { name: 'in-content', templateName: 'IN-CONTENT', path: 'supply-chain_rail1' },
    { name: 'reskin', path: 'supply-chain_reskin' },
    { name: 'wa', path: 'supply-chain_wa' },
  ])
  .setAliasAdUnits('software', [
    { name: 'lb1', templateName: 'LB', path: 'software_lb1' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'software_lb1' },
    { name: 'billboard1', templateName: 'BILLBOARD', path: 'software_billboard' },
    { name: 'rail1', templateName: 'RAIL1', path: 'software_rail1' },
    { name: 'rail2', templateName: 'RAIL2', path: 'software_rail1' },
    { name: 'infinite-rail', templateName: 'INFINITE-RAIL', path: 'software_rail1' },
    { name: 'infinite-interstitial', templateName: 'INFINITE-INTERSTITIAL', path: 'software_rail1' },
    { name: 'in-content', templateName: 'IN-CONTENT', path: 'software_rail1' },
    { name: 'reskin', path: 'software_reskin' },
    { name: 'wa', path: 'software_wa' },
  ]);

module.exports = config;
