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
      src: 'https://base.imgix.net/files/base/indm/all/mbt_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/mbt_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/mbt_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/mbt_logo.png?h=120 2x',
      ],
    },
  },
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: false },
    options: {
      appContextId: '5e8366b1da9f22f7ee6852b4',
    },
  },
  gtm: {
    containerId: 'GTM-K5Q4RP8',
  },
  gcse: {
    id: '003355913687346718228:zsdogq8uetw',
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
      logo: 'https://base.imgix.net/files/base/indm/all/mbt_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
