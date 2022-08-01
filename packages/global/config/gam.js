const GAMConfiguration = require('@parameter1/base-cms-marko-web-gam/config');

module.exports = ({
  accountId = '137873098',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config.lazyLoad = {
    enabled: true, // set to true to enable lazy loading
    fetchMarginPercent: 100, // fetch ad when one viewport away
    renderMarginPercent: 50, // render ad when half viewport away
    mobileScaling: 2, // double these on mobile
  };

  config
    .setTemplate('LB-STICKY-BOTTOM', {
      size: [
        [970, 90],
        [728, 90],
        [320, 50],
        [300, 50],
      ],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 90], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50]] },
      ],
    })
    .setTemplate('BILLBOARD', {
      size: [
        [970, 250],
        [300, 250],
      ],
      sizeMapping: [
        { viewport: [980, 0], size: [970, 250] },
        { viewport: [320, 0], size: [300, 250] },
      ],
    })
    .setTemplate('ROTATION', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [320, 0], size: [300, 250] },
      ],
    })
    .setTemplate('INLINE-CONTENT-MOBILE', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [980, 0], size: [] },
        { viewport: [320, 0], size: [300, 250] },
      ],
    })
    .setTemplate('INLINE-CONTENT-DESKTOP', {
      size: [300, 250],
      sizeMapping: [
        { viewport: [980, 0], size: [300, 250] },
        { viewport: [0, 0], size: [] },
      ],
    });

  return config;
};
