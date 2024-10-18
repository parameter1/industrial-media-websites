const gql = require('graphql-tag');
const { withContent } = require('@parameter1/base-cms-marko-web/middleware');

module.exports = (params = {}) => withContent({
  loaderQueryFragment: gql`
    fragment WithContentTaxonomyCompanySectionFragment on Content {
      taxonomyIds
      company {
        id
        name
      }
      primarySection {
        id
        alias
      }
      gating {
        surveyId
        surveyType
      }
    }
  `,
  formatResponse: ({ res, content: node }) => {
    const tags = new Set();
    tags.add('Website Content');
    if (node.taxonomyIds.includes(3193399) || node.type === 'product') tags.add('PR');
    if (node.type === 'video') tags.add('Video');
    if (node.company && node.company.name) {
      const companyName = encodeURIComponent(node.company.name);
      res.set('x-lead-management-customer', companyName);
    }
    res.set('x-lead-management-link-type', 'Editorial');
    res.set('x-lead-management-tags', [...tags].join(', '));
  },
  ...params,
});
