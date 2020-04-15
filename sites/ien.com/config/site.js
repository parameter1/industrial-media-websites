const navigation = require('./navigation');
const gam = require('./gam');
const socialMediaLinks = require('./social-links');

module.exports = {
  navigation,
  gam,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  simpleFavicon: true,
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/all/ien_logo.png?h=65',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/ien_logo.png?h=130 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/ien_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/ien_logo.png?h=120 2x',
      ],
    },
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
      logo: 'https://base.imgix.net/files/base/indm/all/ien_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
