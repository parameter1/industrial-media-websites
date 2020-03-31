const soap = require('../soap');

module.exports = {
  /**
   * If the DE does not exist, this method will return null.
   */
  getDataExtension: ({
    customerKey,
    props = ['ObjectID', 'CustomerKey', 'Name'],
  } = {}) => soap.retrieveByCustomerKey('DataExtension', customerKey, props),

  /**
   * If the DE does not exist, this method will throw an error.
   * If the subscriber is not found on the DE, this method will return null.
   */
  getDataExtensionSubscriber: async ({ customerKey, subscriberKey, field = 'email' } = {}) => {
    const filter = {
      attributes: { 'xsi:type': 'SimpleFilterPart' },
      Property: field,
      SimpleOperator: 'equals',
      Value: subscriberKey,
    };

    return soap.retrieveOne(`DataExtensionObject[${customerKey}]`, filter, [field]);
  },
};
