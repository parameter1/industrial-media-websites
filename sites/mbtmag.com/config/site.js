const { brandLogos } = require('@industrial-media/package-shared/config/footer-brand-logos');
const omeda = require('@industrial-media/package-shared/config/incd-omeda');

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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'mbtmag.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.mbtmag.com/files/base/indm/all/mbt_logo.png?h=45',
      srcset: [
        'https://img.mbtmag.com/files/base/indm/all/mbt_logo.png?h=90 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.mbtmag.com/files/base/indm/all/mbt_logo.png?h=60',
      srcset: [
        'https://img.mbtmag.com/files/base/indm/all/mbt_logo.png?h=120 2x',
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
      logo: 'https://img.mbtmag.com/files/base/indm/all/mbt_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
