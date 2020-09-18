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
      src: 'https://img.inddist.com/files/base/indm/id/static/id_logo.png?h=45',
      srcset: [
        'https://img.inddist.com/files/base/indm/id/static/id_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://img.inddist.com/files/base/indm/id/static/id_logo.png?h=60',
      srcset: [
        'https://img.inddist.com/files/base/indm/id/static/id_logo.png?h=120 2x',
      ],
    },
  },
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: false },
    options: {
      appContextId: '5e8366c2da9f229f3d6852b6',
    },
  },
  gtm: {
    containerId: 'GTM-M3QH8WQ',
  },
  gcse: {
    id: '003355913687346718228:aa7spjxlyeg',
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
      logo: 'https://img.inddist.com/files/base/indm/id/static/id_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
