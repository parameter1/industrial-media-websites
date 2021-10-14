const template = require('../templates/stealth-link.marko');

module.exports = (app) => {
  app.get('/__about-us', (_, res) => {
    // disable all deferred scripts (P1 events, GTM/GA, GAM, etc)
    res.locals.$deferScripts = { on: 'never' };
    res.marko(template);
  });
};
