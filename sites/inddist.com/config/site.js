const { brandLogos } = require('@industrial-media/package-shared/config/footer-brand-logos');
const omeda = require('@industrial-media/package-shared/config/imcd-omeda');

const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');

module.exports = {
  navigation,
  gam,
  omeda,
  nativeX,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'inddist.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.inddist.com/files/base/indm/id/static/id_logo.png?h=45',
      srcset: [
        'https://img.inddist.com/files/base/indm/id/static/id_logo.png?h=90 2x',
      ],
    },
    footer: {
      brandLogos,
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
