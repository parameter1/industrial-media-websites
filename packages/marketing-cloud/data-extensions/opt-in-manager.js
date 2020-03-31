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

  const props = Object.keys(row).map((key) => {
    const value = row[key];
    return `<Property><Name>${key}</Name><Value>${value}</Value></Property>`;
  });

  const requestType = extensionSubscriber ? 'Update' : 'Create';
  const xml = `
    <Objects xsi:type="DataExtensionObject">
      <CustomerKey>${extensionKey}</CustomerKey>
      <Properties>
        ${props.join('\n')}
      </Properties>
    </Objects>
  `;
  return soap.raw(xml, requestType);
};

const upsertSubscriber = async ({ email, data = {} }) => {
  const subscriber = await soap.retrieveOne('Subscriber', {
    attributes: { 'xsi:type': 'SimpleFilterPart' },
    Property: 'SubscriberKey',
    SimpleOperator: 'equals',
    Value: email,
  }, ['ID']);

  const map = {
    firstName: 'First Name',
    lastName: 'Last Name',
    companyName: 'Company Name',
    phone: 'Phone Number',
    title: 'Title',
  };

  const payload = {
    EmailAddress: email,
    SubscriberKey: email,
    Attributes: Object.keys(map).filter(key => data[key]).map((key) => {
      const value = data[key];
      return { Name: map[key], Value: value };
    }),
  };

  if (subscriber) return soap.update('Subscriber', payload);
  return soap.create('Subscriber', payload);
};

module.exports = {
  sendOptStatus,
  getDataExtension,
  getDataExtensionSubscriber,
  upsertSubscriber,
};
