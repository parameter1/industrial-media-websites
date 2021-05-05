module.exports = (app) => {
  app.get('/:alias(home/video/21107739/startup-fires-ceo-over-expense-reports)', (req, res) => {
    res.redirect(301, '/');
  });
};
