const navigation = require('./navigation');
const gam = require('./gam');

module.exports = {
  navigation,
  gam,
  company: 'Industrial Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/all/cen_logo.jpg?h=45',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/cen_logo.jpg?h=90 2x',
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
  gcse: {
    id: '003355913687346718228:2spsdy3uaup',
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
      logo: 'https://base.imgix.net/files/base/indm/all/cen_logo.jpg?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
