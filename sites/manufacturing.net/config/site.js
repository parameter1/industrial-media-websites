const { brandLogos } = require('@industrial-media/package-shared/config/footer-brand-logos');

const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');

module.exports = {
  navigation,
  gam,
  nativeX,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'manufacturing.net' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.manufacturing.net/files/base/indm/all/mnet_logo.svg?h=45',
      srcset: [
        'https://img.manufacturing.net/files/base/indm/all/mnet_logo.svg?h=90 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.manufacturing.net/files/base/indm/all/mnet_logo.svg?h=60',
      srcset: [
        'https://img.manufacturing.net/files/base/indm/all/mnet_logo.svg?h=120 2x',
      ],
    },
  },
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: false },
    options: {
      appContextId: '5e83669a6eabae9f989e63c4',
    },
  },
  gtm: {
    containerId: 'GTM-WSV9TGW',
  },
  gcse: {
    id: '003355913687346718228:lujuwdo5ryk',
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
      logo: 'https://img.manufacturing.net/files/base/indm/all/mnet_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
