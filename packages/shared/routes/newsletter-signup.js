const newsletterSignup = require('../templates/newsletter-signup');

module.exports = (app) => {
  app.get('/newsletter-signup', (_, res) => { res.marko(newsletterSignup); });
};
