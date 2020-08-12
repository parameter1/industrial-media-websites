const navigation = require('./navigation');
const gam = require('./gam');
const socialMediaLinks = require('./social-links');

module.exports = {
  navigation,
  gam,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/all/mnet_logo.svg?h=45',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/mnet_logo.svg?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/mnet_logo.svg?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/mnet_logo.svg?h=120 2x',
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
      logo: 'https://base.imgix.net/files/base/indm/all/mnet_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
