const fetch = require('node-fetch');
const hasReferrer = require('./has-referrer');
const buildPayload = require('./build-payload');
const buildUrl = require('./build-url');

module.exports = () => (req, res, next) => {
  if (hasReferrer(req.query)) {
    try {
      const payload = buildPayload({ req, source: 'server' });
      const url = buildUrl(payload);
      fetch(url).catch(() => next());
    } catch (e) {
      next();
    } finally {
      next();
    }
  } else {
    next();
  }
};
