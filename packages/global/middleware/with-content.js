const gql = require('graphql-tag');
const { withContent } = require('@parameter1/base-cms-marko-web/middleware');

module.exports = (params = {}) => withContent({
  loaderQueryFragment: gql`
    fragment WithContentPrimarySectionFragment on Content {
      taxonomyIds
      primarySection {
        id
        alias
      }
    }
  `,
  ...params,
});
