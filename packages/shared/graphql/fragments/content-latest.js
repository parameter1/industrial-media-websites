const gql = require('graphql-tag');

module.exports = gql`

fragment WebsiteContentLatestFragment on Content {
  id
  type
  shortName
  teaser(input: { useFallback: false, maxLength: null })
  siteContext {
    path
  }
  published
  company {
    id
    type
    name
    siteContext {
      path
    }
  }
  primaryImage {
    id
    src
    alt
    isLogo
  }
  ... on Authorable {
    authors {
      edges {
        node {
          id
          name
          type
          siteContext {
            path
          }
        }
      }
    }
  }
  ... on ContentPromotion {
    linkText
    linkUrl
  }
  ... on ContentContact {
    title
    phone
    publicEmail
  }
  ... on ContentWebinar {
    startDate
    linkUrl
  }
  ... on ContentEvent {
    startDate
    endDate
  }
}

`;
