module.exports = (app) => {
  app.get('/*?/:id(21107739)/*|/:id(21107739)(/|$)', () => {
    const e = new Error();
    e.statusCode = 404;
    throw e;
  });
};
