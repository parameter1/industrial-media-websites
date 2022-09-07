const gql = require('graphql-tag');

module.exports = {
  loaderQueryFragment: gql`
    fragment WithContentTaxonomy on Content {
      taxonomyIds
      company {
        id
        name
      }
      primarySection {
        id
        alias
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
};
