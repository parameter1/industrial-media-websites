const template = require('../templates/stealth-link.marko');

module.exports = (app) => {
  app.get('/__about-us', (_, res) => { res.marko(template); });
};
