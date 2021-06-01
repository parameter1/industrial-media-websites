const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
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
    ]),
  },
  secondary: {
    items: [
      { href: '/newsletter-signup', label: 'Newsletter Signup' },
      { href: '/video', label: 'Video' },
      { href: 'https://www.cdsreportnow.com/renew/now?idm', label: 'Subscribe to Magazine', target: '_blank' },
    ],
  },
  tertiary: {
    items: [
      ...mapSocialLinks({ links: socialLinks, modifiers: ['social-icon'] }),
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/id-about-us', label: 'About Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/id-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/id-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: sortNavItems([
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
      ]),
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
        { href: 'https://www.cdsreportnow.com/renew/now?idm', label: 'Subscribe to Magazine', target: '_blank' },
        { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
        { href: '/page/id-about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/id-privacy-policy', label: 'Privacy Policy' },
        { href: '/page/id-terms-conditions', label: 'Terms & Conditions' },
        { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
        { href: '/site-map', label: 'Site Map' },
      ],
    },
  ],
};
