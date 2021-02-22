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
      src: 'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=45',
      srcset: [
        'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=60',
      srcset: [
        'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=120 2x',
      ],
    },
  },
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: false },
    options: {
      appContextId: '5e7e610375a0950125baf2b3',
    },
  },
  gtm: {
    containerId: 'GTM-W633TCR',
  },
  gcse: {
    id: '003355913687346718228:r1crm7ykq4y',
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
      logo: 'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
