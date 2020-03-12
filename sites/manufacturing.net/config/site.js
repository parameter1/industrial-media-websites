const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Industrial Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/all/mnet_logo.svg?h=40',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/mnet_logo.svg?h=80 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/mnet_logo.svg?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/mnet_logo.svg?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'http://www.facebook.com/pages/Manufacturingnet/382208778857' },
    { provider: 'twitter', href: 'http://www.twitter.com/mnetnews' },
    { provider: 'youtube', href: 'http://www.youtube.com/Manufacturingdotnet' },
  ],
  gtm: {
    containerId: 'GTM-WSV9TGW',
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
      logo: 'https://base.imgix.net/files/base/indm/all/mnet_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
