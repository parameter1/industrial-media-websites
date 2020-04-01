const { json } = require('body-parser');
const { asyncRoute } = require('@base-cms/utils');
const optInManager = require('@industrial-media/package-marketing-cloud/data-extensions/opt-in-manager');
const newsletterSignup = require('../templates/newsletter-signup');

module.exports = (app) => {
  app.get('/newsletter-signup', (_, res) => { res.marko(newsletterSignup); });

  app.post('/__newsletter-signup', json(), asyncRoute(async (req, res) => {
    try {
      const { body } = req;
      const {
        email,
        confirmEmail,
        row: data,
        choices = {},
      } = body;
      if (email !== confirmEmail) throw new Error('The supplied email addresses do not match.');

      const promises = [
        optInManager.upsertSubscriber({ email, data }),
      ];
      Object.keys(choices).forEach((extensionKey) => {
        const optedIn = Boolean(choices[extensionKey]);
        promises.push(optInManager.sendOptStatus({
          extensionKey,
          email,
          data,
          optedIn,
        }));
      });

      await Promise.all(promises);
      res.json({ ok: true });
    } catch (e) {
      res.status(e.statusCode || e.status || 500).json({ error: true, message: e.message });
    }
  }));
};
