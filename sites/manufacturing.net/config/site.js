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
  nativeX,
  newsletter,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'manufacturing.net' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.ien.com/files/base/indm/all/site-logos/mnet.svg?h=45&auto=format,compress',
      srcset: [
        'https://img.ien.com/files/base/indm/all/site-logos/mnet.svg??h=90&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.ien.com/files/base/indm/all/site-logos/mnet.svg??h=60&auto=format,compress',
      srcset: [
        'https://img.ien.com/files/base/indm/all/site-logos/mnet.svg??h=120&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  gtm: {
    containerId: 'GTM-WSV9TGW',
  },
  gcse: {
    id: '003355913687346718228:lujuwdo5ryk',
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
        logo: 'https://img.manufacturing.net/files/base/indm/all/mnet_logo.png?h=60&auto=format,compress',
      },
      support: {
        email: 'reply@ien.com',
      },
    },
    to: 'david@ien.com',
    branding: {
      logo: 'https://img.manufacturing.net/files/base/indm/all/mnet_logo.png?h=60&auto=format,compress',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
