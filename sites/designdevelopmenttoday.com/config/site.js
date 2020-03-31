const navigation = require('./navigation');
const gam = require('./gam');

module.exports = {
  navigation,
  gam,
  company: 'Industrial Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/all/ddt_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/ddt_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/ddt_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/ddt_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/designdevelopmenttoday/' },
    { provider: 'twitter', href: 'https://twitter.com/DesignDevelop12' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/13611964' },
  ],
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: true },
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
      logo: 'https://base.imgix.net/files/base/indm/all/ddt_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
