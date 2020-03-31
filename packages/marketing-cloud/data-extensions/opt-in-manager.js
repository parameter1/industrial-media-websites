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

const getDataExtensionFields = async ({ customerKey, props = ['Name'] } = {}) => {
  const Filter = {
    attributes: { 'xsi:type': 'SimpleFilterPart' },
    Property: 'DataExtension.CustomerKey',
    SimpleOperator: 'equals',
    Value: customerKey,
  };
  const { Results } = await soap.retrieve('DataExtensionField', props, { Filter });
  return Results;
};

const sendOptStatus = async ({
  extensionKey,
  email,
  data = {},
  optedIn,
}) => {
  const [extensionSubscriber, fields] = await Promise.all([
    getDataExtensionSubscriber({
      customerKey: extensionKey,
      subscriberKey: email,
    }),
    getDataExtensionFields({ customerKey: extensionKey }),
  ]);

  // only include the data if the corresponding field exists in the data extension.
  // set an empty string as the default value (to prevent non-nullable field errors).
  const row = {
    ...fields.reduce((o, field) => {
      const { Name } = field;
      const value = data[Name] || '';
      return { ...o, [Name]: value };
    }, {}),
    email,
    optedIn: Number(optedIn),
  };

  const payload = {
    CustomerKey: extensionKey,
    Properties: Object.keys(row).map((key) => {
      const value = row[key];
      return { Property: { Name: key, Value: value } };
    }),
  };

  if (extensionSubscriber) return soap.update('DataExtensionObject', payload);
  return soap.create('DataExtensionObject', payload);
};

module.exports = {
  sendOptStatus,
  getDataExtension,
  getDataExtensionSubscriber,
};
