const gql = require('graphql-tag');

module.exports = gql`

fragment MostReadListFragment on Content {
  id
  type
  shortName
  siteContext {
    path
  }
}

`;
