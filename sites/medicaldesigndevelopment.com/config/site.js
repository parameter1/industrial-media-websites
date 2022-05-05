const { brandLogos } = require('@industrial-media/package-shared/config/lynch-footer-brand-logos');

const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const socialMediaLinks = require('./social-links');
const identityX = require('./identity-x');

const omedaBrandKey = 'imcd';

module.exports = {
  navigation,
  gam,
  omedaBrandKey,
  identityX: identityX({ omedaBrandKey }),
  nativeX,
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
      src: 'https://img.medicaldesigndevelopment.com/files/base/indm/mdd/image/static/Medical_Design_Development_Logo.png?h=45',
      srcset: [
        'https://img.medicaldesigndevelopment.com/files/base/indm/mdd/image/static/Medical_Design_Development_Logo.png?h=90 2x',
      ],
    },
    footer: {
      brandLogos,
      src: 'https://img.medicaldesigndevelopment.com/files/base/indm/mdd/image/static/Medical_Design_Development_Logo.png?h=60',
      srcset: [
        'https://img.medicaldesigndevelopment.com/files/base/indm/mdd/image/static/Medical_Design_Development_Logo.png?h=120 2x',
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
    to: 'david@ien.com',
    branding: {
      logo: 'https://img.medicaldesigndevelopment.com/files/base/indm/mdd/image/static/Medical_Design_Development_Logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
  brightCovePlayerData: {
    playerId: 'gaFdsLkrH',
    playlistId: '1731910707194039847',
  },
};
