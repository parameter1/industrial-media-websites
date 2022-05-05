const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteFeaturedJobstListFragment on Content {
  id
  shortName
  type
  teaser(input: { useFallback: false, maxLength: null })
  siteContext {
    path
  }
  ... on ContentPromotion {
    linkText
    linkUrl
  }
}

`;
