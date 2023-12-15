const { brandLogos } = require('@industrial-media/package-global/config/lynch-footer-brand-logos');

const navigation = require('./navigation');
const contentMeter = require('./content-meter');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');
const identityX = require('./identity-x');
const omeda = require('./omeda');
const omedaIdentityX = require('./omeda-identity-x');
const newsletter = require('./newsletter');

module.exports = {
  navigation,
  contentMeter,
  gam,
  omeda,
  omedaIdentityX,
  identityX,
  nativeX,
  newsletter,
  socialMediaLinks,
  company: 'Lynch Media',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'cannabisequipmentnews.com' : '',
  },
  simpleFavicon: true,
  logos: {
    navbar: {
      src: 'https://img.cannabisequipmentnews.com/files/base/indm/all/site-logos/cen.svg?h=70&auto=format,compress',
      srcset: [
        'https://img.cannabisequipmentnews.com/files/base/indm/all/site-logos/cen.svg?h=140&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.cannabisequipmentnews.com/files/base/indm/all/site-logos/cen.svg?h=60&auto=format,compress',
      srcset: [
        'https://img.cannabisequipmentnews.com/files/base/indm/all/site-logos/cen.svg?h=120&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  gtm: {
    containerId: 'GTM-KFBRN7Q',
  },
  gcse: {
    id: '003355913687346718228:2spsdy3uaup',
  },
  wufoo: {
    userName: 'cannabisequipmentnews',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    title: 'Submit a comment.',
    notificationDefaults: {
      to: 'david@cannabisequipmentnews.com',
      branding: {
        logo: 'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=60&auto=format,compress',
      },
      support: {
        email: 'reply@cannabisequipmentnews.com',
      },
    },
    to: 'david@cannabisequipmentnews.com',
    branding: {
      logo: 'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=60&auto=format,compress',
    },
    support: {
      email: 'reply@cannabisequipmentnews.com',
    },
  },
  brightCovePlayerEnabled: true,
  brightCovePlayerData: {
    playerId: 'kln2UOlrO',
    playlistId: '1739634672452634754',
  },
};
