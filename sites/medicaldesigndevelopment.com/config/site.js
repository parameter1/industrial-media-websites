const { brandLogos } = require('@industrial-media/package-global/config/lynch-footer-brand-logos');

const navigation = require('./navigation');
const contentMeter = require('./content-meter');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');
const identityX = require('./identity-x');
const identityXOptInHooks = require('./identity-x-opt-in-hooks');
const omeda = require('./omeda');
const omedaIdentityX = require('./omeda-identity-x');
const newsletter = require('./newsletter');

module.exports = {
  navigation,
  useLinkInjectedBody: process.env.USE_LINK_INJECTED_BODY || false,
  contentMeter,
  gam,
  omeda,
  omedaIdentityX,
  identityX,
  identityXOptInHooks,
  nativeX,
  newsletter,
  socialMediaLinks,
  company: 'Lynch Media',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'medicaldesigndevelopment.com' : '',
  },
  simpleFavicon: true,
  logos: {
    navbar: {
      src: 'https://img.medicaldesigndevelopment.com/files/base/indm/all/site-logos/mdd.svg?h=45&auto=format,compress',
      srcset: [
        'https://img.medicaldesigndevelopment.com/files/base/indm/all/site-logos/mdd.svg?h=90&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.medicaldesigndevelopment.com/files/base/indm/all/site-logos/mdd.svg?h=60&auto=format,compress',
      srcset: [
        'https://img.medicaldesigndevelopment.com/files/base/indm/all/site-logos/mdd.svg?h=120&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  gtm: {
    containerId: 'GTM-WT46JRL',
  },
  gcse: {
    id: 'b8c96c1b86b7fa8d1',
  },
  wufoo: {
    userName: 'ien',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    title: 'Submit a comment.',
    notificationDefaults: {
      to: 'david@ien.com',
      branding: {
        logo: 'https://img.medicaldesigndevelopment.com/files/base/indm/all/site-logos/mdd.svg?h=60&auto=format,compress',
      },
      support: {
        email: 'reply@ien.com',
      },
    },
    to: 'david@ien.com',
    branding: {
      logo: 'https://img.medicaldesigndevelopment.com/files/base/indm/all/site-logos/mdd.svg?h=60&auto=format,compress',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
