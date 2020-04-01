const navigation = require('./navigation');
const gam = require('./gam');


module.exports = {
  navigation,
  gam,
  company: 'Industrial Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/id/static/id_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/indm/id/static/id_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/id/static/id_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/id/static/id_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Industrial-Distribution/111265965577111' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/groups/3338596' },
    { provider: 'twitter', href: 'http://www.twitter.com/indistwebsite' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/InDistribution' },
  ],
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: true },
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
      logo: 'https://base.imgix.net/files/base/indm/id/static/id_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
