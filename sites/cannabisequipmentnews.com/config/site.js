const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Industrial Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/all/cen_logo.jpg?h=40',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/cen_logo.jpg?h=80 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/cen_logo.jpg?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/cen_logo.jpg?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/CannaEquipmentNews/' },
    { provider: 'twitter', href: 'https://twitter.com/news_cen' },
  ],
  gtm: {
    containerId: 'GTM-NQ37376',
  },
  wufoo: {
    userName: '<NOT_SET>',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    to: 'david@ien.com',
    branding: {
      logo: 'https://base.imgix.net/files/base/indm/all/cen_logo.jpg?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
