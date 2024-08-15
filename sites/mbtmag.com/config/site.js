const { brandLogos } = require('@industrial-media/package-global/config/footer-brand-logos');

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
  mindful: {
    namespace: 'im/default',
  },
  nativeX,
  newsletter,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'mbtmag.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.mbtmag.com/files/base/indm/all/site-logos/mbt.svg?h=45&auto=format,compress',
      srcset: [
        'https://img.mbtmag.com/files/base/indm/all/site-logos/mbt.svg?h=90&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.mbtmag.com/files/base/indm/all/site-logos/mbt.svg?h=60&auto=format,compress',
      srcset: [
        'https://img.mbtmag.com/files/base/indm/all/site-logos/mbt.svg?h=120&auto=format,compress&dpr=2 2x',
      ],
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
    title: 'Submit a comment.',
    notificationDefaults: {
      to: 'david@ien.com',
      branding: {
        logo: 'https://img.mbtmag.com/files/base/indm/all/mbt_logo.png?h=60&auto=format,compress',
      },
      support: {
        email: 'reply@ien.com',
      },
    },
    to: 'david@ien.com',
    branding: {
      logo: 'https://img.mbtmag.com/files/base/indm/all/mbt_logo.png?h=60&auto=format,compress',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
