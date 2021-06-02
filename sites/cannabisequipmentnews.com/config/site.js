const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');

module.exports = {
  navigation,
  gam,
  nativeX,
  socialMediaLinks,
  company: 'Lynch Media',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'cannabisequipmentnews.com' : '',
  },
  simpleFavicon: true,
  logos: {
    navbar: {
      src: 'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=70',
      srcset: [
        'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=140 2x',
      ],
    },
    footer: {
      src: 'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=60',
      srcset: [
        'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=120 2x',
      ],
    },
  },
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: true },
    options: {
      appContextId: '5e8203df75a0950125baf2b5',
    },
  },
  gtm: {
    containerId: 'GTM-KFBRN7Q',
  },
  gcse: {
    id: '003355913687346718228:2spsdy3uaup',
  },
  wufoo: {
    userName: 'cannabisequipmentnews',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    to: 'david@cannabisequipmentnews.com',
    branding: {
      logo: 'https://img.cannabisequipmentnews.com/files/base/indm/all/cen_logo.jpg?h=60',
    },
    support: {
      email: 'reply@cannabisequipmentnews.com',
    },
  },
};
