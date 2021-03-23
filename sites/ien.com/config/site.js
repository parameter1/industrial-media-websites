const { footerLogos } = require('@industrial-media/package-shared/config/footer-logos');

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
  simpleFavicon: true,
  logos: {
    navbar: {
      src: 'https://img.ien.com/files/base/indm/all/ien_logo.png?h=65',
      srcset: [
        'https://img.ien.com/files/base/indm/all/ien_logo.png?h=130 2x',
      ],
    },
    footer: {
      src: 'https://img.ien.com/files/base/indm/all/ien_logo.png?h=60',
      srcset: [
        'https://img.ien.com/files/base/indm/all/ien_logo.png?h=120 2x',
      ],
    },
    footerMulti: footerLogos,
  },
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: true },
    options: {
      appContextId: '5e7e5fac88f2fa00cdebab24',
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
