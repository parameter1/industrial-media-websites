const gql = require('graphql-tag');

module.exports = gql`

fragment LeadersFeaturedCompaniesFragment on Content {
  id
  type
  typeTitled: type(input: { format: titleize })
  shortName
  canonicalPath
  ... on ContentCompany {
    website
  }
}

`;
