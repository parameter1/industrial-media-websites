const { brandLogos } = require('@industrial-media/package-global/config/footer-brand-logos');

const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');
const identityX = require('./identity-x');
const omeda = require('./omeda');
const omedaIdentityX = require('./omeda-identity-x');
const newsletter = require('./newsletter');

module.exports = {
  navigation,
  gam,
  omeda,
  omedaIdentityX,
  identityX,
  nativeX,
  newsletter,
  socialMediaLinks,
  company: 'Industrial Media, LLC',
  p1events: {
    tenant: 'indm',
    enabled: true,
    cookieDomain: process.env.NODE_ENV === 'production' ? 'impomag.com' : '',
  },
  logos: {
    navbar: {
      src: 'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=45&auto=format,compress',
      srcset: [
        'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=90&auto=format,compress&dpr=2 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=60&auto=format,compress',
      srcset: [
        'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=120&auto=format,compress&dpr=2 2x',
      ],
    },
  },
  gtm: {
    containerId: 'GTM-TRGKQTS',
  },
  gcse: {
    id: '003355913687346718228:n6r3goqxvkt',
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
        logo: 'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=60&auto=format,compress',
      },
      support: {
        email: 'reply@ien.com',
      },
    },
    to: 'david@ien.com',
    branding: {
      logo: 'https://img.impomag.com/files/base/indm/all/impo_logo.png?h=60&auto=format,compress',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
  brightCovePlayerData: {
    playerId: 'lYu65QhK14',
  },
};
