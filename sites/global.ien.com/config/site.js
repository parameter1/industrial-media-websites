const { brandLogos } = require('@industrial-media/package-global/config/footer-brand-logos');

const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');
const identityX = require('./identity-x');

const omedaBrandKey = 'imcd';

module.exports = {
  navigation,
  gam,
  omedaBrandKey,
  identityX: identityX({ omedaBrandKey }),
  nativeX,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'ien.com' : '',
  },
  simpleFavicon: true,
  logos: {
    navbar: {
      src: 'https://img.ien.com/files/base/indm/all/ien_logo.png?h=65',
      srcset: [
        'https://img.ien.com/files/base/indm/all/ien_logo.png?h=130 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.ien.com/files/base/indm/all/ien_logo.png?h=60',
      srcset: [
        'https://img.ien.com/files/base/indm/all/ien_logo.png?h=120 2x',
      ],
    },
  },
  gtm: {
    containerId: 'GTM-NMWJZK3',
  },
  gcse: {
    id: '003355913687346718228:go0ftwgyb8x',
  },
  wufoo: {
    userName: 'ien',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    to: 'david@ien.com',
    branding: {
      logo: 'https://img.ien.com/files/base/indm/all/ien_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
