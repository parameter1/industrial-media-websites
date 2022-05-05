const gql = require('graphql-tag');

module.exports = gql`

fragment SectionFeedBlockContentFragment on Content {
  id
  type
  shortName
  siteContext {
    path
  }
  primaryImage {
    id
    src(input: { options: { auto: "format,compress", q: 70 } })
    alt
    isLogo
  }
}

`;
