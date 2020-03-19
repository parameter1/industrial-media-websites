const gql = require('graphql-tag');

module.exports = gql`

fragment MostRecentListFragment on Content {
  id
  type
  shortName
  siteContext {
    path
  }
}

`;
