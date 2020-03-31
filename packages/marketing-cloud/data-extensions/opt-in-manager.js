const soap = require('../soap');

/**
 * If the DE does not exist, this method will return null.
 */
const getDataExtension = ({
  customerKey,
  props = ['ObjectID', 'CustomerKey', 'Name'],
} = {}) => soap.retrieveByCustomerKey('DataExtension', customerKey, props);

/**
 * If the DE does not exist, this method will throw an error.
 * If the subscriber is not found on the DE, this method will return null.
 */
const getDataExtensionSubscriber = async ({ customerKey, subscriberKey, field = 'email' } = {}) => {
  const filter = {
    attributes: { 'xsi:type': 'SimpleFilterPart' },
    Property: field,
    SimpleOperator: 'equals',
    Value: subscriberKey,
  };

  return soap.retrieveOne(`DataExtensionObject[${customerKey}]`, filter, [field]);
};

module.exports = {
  getDataExtension,
  getDataExtensionSubscriber,
};
