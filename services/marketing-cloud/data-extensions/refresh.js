const eachSeries = require('async/eachSeries');
const newrelic = require('../nr');
const rest = require('../rest');
const soap = require('../soap');

const { log, error } = console;

const loadExtensions = async ({ requestId, extensions = [] } = {}) => {
  const response = requestId ? await soap.continueRetrieve(requestId) : await soap.retrieve('DataExtension', ['ObjectID', 'Name']);
  const { Results, OverallStatus, RequestID } = response;
  Results.forEach((r) => {
    if (/API Opt/.test(r.Name)) extensions.push(r);
  });
  if (OverallStatus === 'MoreDataAvailable') {
    await loadExtensions({ requestId: RequestID, extensions });
  }
  return extensions;
};

const run = async () => {
  log('Starting data extension refresh...');
  const extensions = await loadExtensions();

  await eachSeries(extensions, async (ext) => {
    try {
      const { ObjectID } = ext;
      log(`Sending refresh request for ${ext.Name} (${ObjectID})`);
      await rest.request({
        endpoint: `/email/v1/filteredCustomObjects/${ObjectID}/refresh`,
        method: 'POST',
      });
    } catch (e) {
      error(e);
    }
  });
  log('DONE!');
};

run().catch(e => newrelic.noticeError(e));
