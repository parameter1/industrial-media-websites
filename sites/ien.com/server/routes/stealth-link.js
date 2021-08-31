const template = require('@industrial-media/package-shared/templates/stealth-link');

module.exports = (app) => {
  app.get('/__about-us', (_, res) => { res.marko(template); });
};
