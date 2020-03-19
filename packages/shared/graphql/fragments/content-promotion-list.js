const gql = require('graphql-tag');

module.exports = gql`
fragment WebsiteContentPromotionListFragment on Content {
  id
  type
  shortName
  body
  siteContext {
    path
  }
  primaryImage {
    id
    src
    alt
    isLogo
  }
  ... on ContentPromotion {
    linkText
    linkUrl
  }
}
`;
