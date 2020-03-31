const navigation = require('./navigation');
const gam = require('./gam');

module.exports = {
  navigation,
  gam,
  company: 'Industrial Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/all/ien_logo.png?h=45',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/ien_logo.png?h=90 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/ien_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/ien_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/Industrial-Equipment-News-153179218105048' },
    { provider: 'twitter', href: 'https://twitter.com/IEN_Now' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCwKursTtvT5lmEJBhdYeRbQ' },
    { provider: 'instagram', href: 'https://www.instagram.com/ien_now/' },
    { provider: 'radio-tower', href: 'https://radio.ien.com' },
  ],
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
