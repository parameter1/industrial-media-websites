const newrelic = require('../nr');
const rest = require('../rest');
const soap = require('../soap');

const { log } = console;

const run = async () => {
  log('Starting data extension refresh...');
  const { Results } = await soap.retrieve('DataExtension', ['ObjectID', 'Name']);
  const extensions = Results.filter(r => /API Opt/.test(r.Name));

  await Promise.all(extensions.map(async (ext) => {
    const { ObjectID } = ext;
    log(`Sending refresh request for ${ext.Name} (${ObjectID})`);
    return rest.request({
      endpoint: `/email/v1/filteredCustomObjects/${ObjectID}/refresh`,
      method: 'POST',
    });
  }));
  log('Refresh complete.');
};

run().catch(e => newrelic.noticeError(e));
