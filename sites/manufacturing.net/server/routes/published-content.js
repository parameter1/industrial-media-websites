const videos = require('@industrial-media/package-shared/templates/published-content/videos');

module.exports = (app) => {
  app.get('/videos', (_, res) => { res.marko(videos); });
};
