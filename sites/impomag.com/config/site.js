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
  logos: {
    navbar: {
      src: 'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=45',
      srcset: [
        'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=60',
      srcset: [
        'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=120 2x',
      ],
    },
  },
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: false },
    options: {
      appContextId: '5e8366d0da9f2201fa6852b7',
    },
  },
  gtm: {
    containerId: 'GTM-TRGKQTS',
  },
  gcse: {
    id: '003355913687346718228:n6r3goqxvkt',
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
      logo: 'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
