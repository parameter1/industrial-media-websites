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
    cookieDomain: process.env.NODE_ENV === 'production' ? 'designdevelopmenttoday.com' : '',
  },
  simpleFavicon: true,
  logos: {
    navbar: {
      src: 'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=45',
      srcset: [
        'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=90 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=60',
      srcset: [
        'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=120 2x',
      ],
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
    notificationDefaults: {
      to: 'david@ien.com',
      branding: {
        logo: 'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=60',
      },
      support: {
        email: 'reply@ien.com',
      },
    },
    to: 'david@ien.com',
    branding: {
      logo: 'https://img.designdevelopmenttoday.com/files/base/indm/all/ddt_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
