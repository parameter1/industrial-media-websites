const { withMagazineIssue, withMagazinePublication } = require('@base-cms/marko-web/middleware');
const publication = require('@industrial-media/package-shared/templates/magazine/publication');
const publicationFragment = require('@industrial-media/package-shared/graphql/fragments/magazine-publication-page');
const issue = require('@industrial-media/package-shared/templates/magazine/issue');
const issueFragment = require('@industrial-media/package-shared/graphql/fragments/magazine-issue-page');

const index = require('../templates/magazine/index');

module.exports = (app) => {
  app.get('/magazine', (req, res) => {
    res.marko(index);
  });

  app.get('/magazine/:id([a-fA-F0-9]{24})', withMagazinePublication({
    template: publication,
    queryFragment: publicationFragment,
  }));

  app.get('/magazine/:id(\\d+)', withMagazineIssue({
    template: issue,
    queryFragment: issueFragment,
  }));
};
