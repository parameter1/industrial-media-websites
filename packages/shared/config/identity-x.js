const IdentityXConfiguration = require('@parameter1/base-cms-marko-web-identity-x/config');
const addOmedaIntegrationHooks = require('@parameter1/base-cms-marko-web-omeda-identity-x/add-integration-hooks');
const { get } = require('@parameter1/base-cms-object-path');
const newrelic = require('newrelic');

const omeda = require('./omeda');

const { log } = console;

module.exports = ({
  appId,
  requiredServerFields = ['givenName', 'familyName', 'countryCode'],
  requiredClientFields = ['regionCode', 'countryCode'],
  omedaGraphQLProp = '$omeda',

  // custom param since IM has multiple omeda brands
  omedaBrandKey,
  ...rest
} = {}) => {
  const config = new IdentityXConfiguration({
    appId,
    apiToken: process.env.IDENTITYX_API_TOKEN,
    requiredServerFields,
    requiredClientFields,
    onHookError: (e) => {
      if (process.env.NODE_ENV === 'development') {
        log('ERROR IN IDENTITY-X HOOK', e);
        if (e.networkError) log('Network Error', get(e, 'networkError.result.errors.0'));
      }
      newrelic.noticeError(e);
    },
    ...rest,
  });

  const omedaConfig = omeda(omedaBrandKey);
  addOmedaIntegrationHooks({
    idxConfig: config,
    brandKey: omedaConfig.brandKey,
    productId: get(omedaConfig, 'rapidIdentification.productId'),
    omedaGraphQLProp,
  });
  return config;
};
