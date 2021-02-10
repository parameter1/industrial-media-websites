const {
  cleanEnv,
  validators,
  num,
} = require('@parameter1/base-cms-env');

const { nonemptystr } = validators;

module.exports = cleanEnv(process.env, {
  FUEL_API_AUTH_URL: nonemptystr({ desc: 'The authentication base URI' }),
  FUEL_API_CLIENT_ID: nonemptystr({ desc: 'The Marketing Cloud API client ID.' }),
  FUEL_API_CLIENT_SECRET: nonemptystr({ desc: 'The Marketing Cloud API client secret.' }),
  FUEL_API_ACCOUNT_ID: num({ desc: 'Optional account identifier of the target business unit', default: undefined }),
});
