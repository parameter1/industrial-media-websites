const gql = require('graphql-tag');

module.exports = gql`

fragment MagazineIssueArchiveFragment on MagazineIssue {
  id
  name
  description
  canonicalPath
  coverImage {
    id
    src
  }
  publication {
    id
    name
  }
}

`;
