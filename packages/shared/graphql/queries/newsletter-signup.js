const gql = require('graphql-tag');

module.exports = gql`

query EmailNewsletterSignup($siteId: ObjectID!) {
  emailNewsletters(input: { siteId: $siteId, pagination: { limit: 0 }, sort: { field: id, order: asc } }) {
    edges {
      node {
        id
        alias
        name
        description
      }
    }
  }
}

`;
