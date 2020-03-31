const { json } = require('body-parser');
const newsletterSignup = require('../templates/newsletter-signup');

module.exports = (app) => {
  app.get('/newsletter-signup', (_, res) => { res.marko(newsletterSignup); });

  app.post('/__newsletter-signup', json(), (req, res) => {
    const { body } = req;
    console.log(body);
    res.json({ ok: true });
  });
};
