const eachSeries = require('async/eachSeries');
const { get } = require('@base-cms/object-path');
const newrelic = require('../nr');
const rest = require('../rest');
const soap = require('../soap');

const { log } = console;

const run = async () => {
  log('Starting data extension refresh...');
  const { Results } = await soap.retrieve('DataExtension', ['ObjectID', 'Name']);
  const extensions = Results.filter(r => /API Opt/.test(r.Name));

  await eachSeries(extensions, async (ext) => {
    const { ObjectID } = ext;
    log(`Sending refresh request for ${ext.Name} (${ObjectID})`);
    const response = await rest.request({
      endpoint: `/email/v1/filteredCustomObjects/${ObjectID}/refresh`,
      method: 'POST',
    });
    const asyncId = get(response, 'filterActivityInstance.asyncID');
    if (!asyncId) throw new Error(`No asyncId was found in the refresh response for ${ObjectID}`);
    log(`Refresh complete. Async ID ${asyncId}`);
  });
  log('DONE!');
};

run().catch(e => newrelic.noticeError(e));
