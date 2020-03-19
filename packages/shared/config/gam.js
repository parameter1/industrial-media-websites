const GAMConfiguration = require('@base-cms/marko-web-gam/config');

module.exports = ({
  accountId = '137873098',
  basePath,
} = {}) => {
  const config = new GAMConfiguration(accountId, { basePath });

  config
    .setTemplate('LB', {
      size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    })
    .setTemplate('LB-STICKY-BOTTOM', {
      size: [[970, 90], [970, 66], [728, 90], [320, 50], [300, 50], [300, 100]],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 90], [970, 66], [728, 90]] },
        { viewport: [750, 0], size: [728, 90] },
        { viewport: [320, 0], size: [[300, 50], [320, 50], [300, 100]] },
      ],
    })
    .setTemplate('BILLBOARD', {
      size: [970, 250],
      sizeMapping: [
        { viewport: [980, 0], size: [[970, 250]] },
        { viewport: [0, 0], size: [] },
      ],
    })
    .setTemplate('RAIL1', { size: [[300, 250]] })
    .setTemplate('RAIL2', { size: [[300, 600]] })
    .setTemplate('IN-CONTENT', {
      size: [[300, 250], [300, 600]],
      sizeMapping: [
        { viewport: [992, 0], size: [] },
        { viewport: [576, 0], size: [[300, 250], [300, 600]] },
        { viewport: [300, 0], size: [[300, 250]] },
      ],
    })
    .setTemplate('INFINITE-RAIL', {
      size: [[300, 250], [300, 600]],
      sizeMapping: [
        { viewport: [992, 0], size: [[300, 250], [300, 600]] },
        { viewport: [0, 0], size: [] },
      ],
    })
    .setTemplate('INFINITE-INTERSTITIAL', {
      size: [[300, 250], [300, 600]],
      sizeMapping: [
        { viewport: [992, 0], size: [] },
        { viewport: [300, 0], size: [[300, 250], [300, 600]] },
      ],
    });

  return config;
};
