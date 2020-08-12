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
      src: 'https://base.imgix.net/files/base/indm/all/fm_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/fm_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/fm_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/fm_logo.png?h=120 2x',
      ],
    },
  },
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: false },
    options: {
      appContextId: '5e82041275a0950125baf2b6',
    },
  },
  gtm: {
    containerId: 'GTM-T6RB25V',
  },
  gcse: {
    id: '003355913687346718228:w3ie9ydeqtb',
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
      logo: 'https://base.imgix.net/files/base/indm/all/fm_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
