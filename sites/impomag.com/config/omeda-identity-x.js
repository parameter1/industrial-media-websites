const configure = require('@industrial-media/package-global/config/omeda-identity-x');
const omedaConfig = require('./omeda');
const idxConfig = require('./identity-x');

module.exports = configure({
  omedaConfig,
  idxConfig,
  rapidIdentProductId: omedaConfig.rapidIdentification.productId,
  websiteBehaviorAttributeId: 16116,
});
