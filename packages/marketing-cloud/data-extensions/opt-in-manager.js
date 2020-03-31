const soap = require('../soap');

module.exports = {
  /**
   *
   */
  getDataExtension: ({
    customerKey,
    props = ['ObjectID', 'CustomerKey', 'Name'],
  } = {}) => soap.retrieveByCustomerKey('DataExtension', customerKey, props),

  /**
   *
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
