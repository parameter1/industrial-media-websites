const privacyPolicy = require('./privacy-policy');

const baseConfig = {
  action: 'https://industrialmedia.dragonforms.com/loading.do',
  hiddenInputs: [
    { name: 'omedasite', value: 'id_signup' },
  ],
};

const defaults = {
  disabled: process.env.DISABLE_IDX_NEWSLETTER_SIGNUP === 'true',
  name: 'NOT_SET',
  description: 'NOT_SET',
  privacyPolicy,
  defaultNewsletter: {
    deploymentTypeId: 0,
    name: 'NOT_SET',
    eventCategory: 'NOT_SET',
  },
  newsletters: [
    {
      deploymentTypeId: 0,
      name: 'NOT_SET',
      description: 'NOT_SET',
      eventCategory: 'NOT_SET',
    },
  ],
  demographic: {
    id: 0,
    label: 'Your primary role?',
    values: [
      { id: 0, label: 'NOT_SET' },
    ],
  },
};

module.exports = {
  // uses inline omeda form
  signupBanner: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-full.png',
    name: 'Subscribe To Our Newsletters',
    description: 'Subscribe to receive the latest information.',
  },
  pushdown: {
    ...defaults,
    imagePath: 'files/base/p1/sandbox/image/static/newsletter-phone-half.png',
    name: 'Subscribe To Our Newsletters',
    description: 'Subscribe to receive the latest information.',
  },

  modal: {
    ...defaults,
    enabled: false,
    cookieValueToMatch: 1,
    name: 'Subscribe To Our Newsletters',
    description: 'Subscribe to receive the latest information.',
  },

  // links off to seperate omeda dragonform
  signupBannerLarge: {
    ...baseConfig,
    name: 'Subscribe To Our Newsletters',
    description: 'Subscribe to receive the latest information.',
  },
  signupFooter: {
    ...baseConfig,
    name: 'Subscribe To Our Newsletters',
    description: 'Subscribe to receive the latest information.',
  },
};
