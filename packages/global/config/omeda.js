const configs = (brandKey) => {
  const config = {
    imcd: {
      brandKey: 'imcd',
      clientKey: 'client_imcd',
      appId: process.env.OMEDA_APP_ID,
      inputId: process.env.OMEDA_INPUT_ID,
      graphqlUri: 'https://graphql.omeda.parameter1.com/',
      rapidIdentification: {
        productId: 715,
      },
      olytics: {
        oid: '885288e230da4bf9ae9626e64e9fbf46',
      },
    },
    lynchm: {
      brandKey: 'lynchm',
      clientKey: 'client_imcd',
      appId: process.env.OMEDA_APP_ID,
      inputId: process.env.OMEDA_INPUT_ID,
      graphqlUri: 'https://graphql.omeda.parameter1.com/',
      rapidIdentification: {
        productId: 716,
      },
      olytics: {
        oid: '554695fe27a74242b5a8f34d7e804c77',
      },
    },
  };
  return config[brandKey];
};

/**
 *
 * @param {string} brandKey The Omeda brand key to load config for.
 * @returns {object}
 */
module.exports = (brandKey) => {
  const config = configs(brandKey);
  if (!config) throw new Error(`Unable to load an Omeda config for brand ${brandKey}`);
  return config;
};
