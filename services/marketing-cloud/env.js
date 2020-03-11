const {
  cleanEnv,
  validators,
  bool,
  num,
} = require('@base-cms/env');

const { nonemptystr } = validators;

module.exports = cleanEnv(process.env, {
  FUEL_API_AUTH_URL: nonemptystr({ desc: 'The authentication base URI' }),
  FUEL_API_CLIENT_ID: nonemptystr({ desc: 'The Marketing Cloud API client ID.' }),
  FUEL_API_CLIENT_SECRET: nonemptystr({ desc: 'The Marketing Cloud API client secret.' }),
  FUEL_API_ACCOUNT_ID: num({ desc: 'Optional account identifier of the target business unit', default: undefined }),
  NEW_RELIC_ENABLED: bool({ desc: 'Whether New Relic is enabled.', default: true, devDefault: false }),
  NEW_RELIC_LICENSE_KEY: nonemptystr({ desc: 'The license key for New Relic.', devDefault: '(unset)' }),
});
