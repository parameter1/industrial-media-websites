const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteSectionPageWithLogoFragment on WebsiteSection {
  id
  name
  alias
  fullName
  description
  logo {
    id
    src(input: { options: { auto: "format,compress" q: 70 } })
  }
  hierarchy {
    id
    alias
    name
  }
}
`;
