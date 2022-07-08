const { brandLogos } = require('@industrial-media/package-global/config/lynch-footer-brand-logos');

const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');
const identityX = require('./identity-x');
const newsletter = require('./newsletter');

const omedaBrandKey = 'lynchm';

module.exports = {
  navigation,
  gam,
  omedaBrandKey,
  identityX: identityX({ omedaBrandKey }),
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
      src: 'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=70',
      srcset: [
        'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=140&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=60',
      srcset: [
        'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=120&auto=format,compress&dpr=2 2x',
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
    notificationDefaults: {
      to: 'david@cannabisequipmentnews.com',
      branding: {
        logo: 'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=60',
      },
      support: {
        email: 'reply@cannabisequipmentnews.com',
      },
    },
    to: 'david@cannabisequipmentnews.com',
    branding: {
      logo: 'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=60',
    },
    support: {
      email: 'reply@cannabisequipmentnews.com',
    },
  },
  brightCovePlayerEnabled: false,
};
