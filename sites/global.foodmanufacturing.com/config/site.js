const { brandLogos } = require('@industrial-media/package-global/config/footer-brand-logos');

const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');
const identityX = require('./identity-x');
const newsletter = require('./newsletter');

const omedaBrandKey = 'imcd';

module.exports = {
  navigation,
  gam,
  omedaBrandKey,
  identityX: identityX({ omedaBrandKey }),
  nativeX,
  newsletter,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'foodmanufacturing.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=45',
      srcset: [
        'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=90&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=60',
      srcset: [
        'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=120&auto=format,compress&dpr=2 2x',
      ],
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
    notificationDefaults: {
      to: 'david@ien.com',
      branding: {
        logo: 'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=60',
      },
      support: {
        email: 'reply@ien.com',
      },
    },
    to: 'david@ien.com',
    branding: {
      logo: 'https://img.foodmanufacturing.com/files/base/indm/all/fm_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
