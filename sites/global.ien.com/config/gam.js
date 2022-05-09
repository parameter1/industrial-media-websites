const configureGAM = require('@industrial-media/package-global/config/gam');

const config = configureGAM({ basePath: 'IEN' });

config.lazyLoad = {
  enabled: true, // set to true to enable lazy loading
  fetchMarginPercent: 100, // fetch ad when one viewport away
  renderMarginPercent: 50, // render ad when half viewport away
  mobileScaling: 2, // double these on mobile
};

config
  .setAliasAdUnits('default', [
    { name: 'leaderboard', templateName: 'LEADERBOARD', path: 'default_lb1' },
    { name: 'lb-sticky-bottom', templateName: 'LB-STICKY-BOTTOM', path: 'default_lb1' },
    // 300x250 that loads in the tops stories block on section & homepages
    { name: 'top-stories', templateName: 'RAIL', path: 'default_rail1' },
    { name: 'load-more', templateName: 'RAIL', path: 'default_rail1' },
    { name: 'inline-content-mobile', templateName: 'RAIL', path: 'default_rail1' },
    { name: 'inline-content-desktop', templateName: 'RAIL', path: 'default_rail1' },
    { name: 'reskin', path: 'default_reskin' },
  ]);

module.exports = config;
