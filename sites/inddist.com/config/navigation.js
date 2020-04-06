const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: [
      { href: '/associations', label: 'Associations' },
      { href: '/big-50', label: 'Big 50' },
      { href: '/business-technology', label: 'Business Technology' },
      { href: '/earnings', label: 'Earnings' },
      { href: '/economy', label: 'Economy' },
      { href: '/mergers-acquisitions', label: 'Mergers & Acquisitions' },
      { href: '/operations', label: 'Operations' },
      { href: '/sales', label: 'Sales' },
      { href: '/staffing-changes', label: 'Staffing Changes' },
      { href: '/supply-chain', label: 'Supply Chain' },
      { href: '/workforce-development', label: 'Workforce' },
    ],
  },
  secondary: {
    items: [
      { href: '/newsletter-signup', label: 'Newsletter Signup' },
      { href: '/magazine', label: 'Magazine' },
      { href: '/videos', label: 'Videos' },
    ],
  },
  tertiary: {
    items: [
      ...mapSocialLinks({ links: socialLinks }),
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/id-about-us', label: 'About Us' },
      { href: '/page/id-advertising', label: 'Advertising' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/id-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/id-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/associations', label: 'Associations' },
        { href: '/big-50', label: 'Big 50' },
        { href: '/business-technology', label: 'Business Technology' },
        { href: '/earnings', label: 'Earnings' },
        { href: '/economy', label: 'Economy' },
        { href: '/mergers-acquisitions', label: 'Mergers & Acquisitions' },
        { href: '/operations', label: 'Operations' },
        { href: '/sales', label: 'Sales' },
        { href: '/staffing-changes', label: 'Staffing Changes' },
        { href: '/supply-chain', label: 'Supply Chain' },
        { href: '/workforce-development', label: 'Workforce' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { href: '/magazine', label: 'Magazine' },
        { href: '/videos', label: 'Videos' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/newsletter-signup', label: 'Newsletter Signup' },
        { href: '/page/id-advertising', label: 'Advertising' },
        { href: '/page/id-about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/id-privacy-policy', label: 'Privacy Policy' },
        { href: '/page/id-terms-conditions', label: 'Terms & Conditions' },
        { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      ],
    },
  ],
};
