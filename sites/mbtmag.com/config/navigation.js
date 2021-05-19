const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/best-practices', label: 'Best Practices' },
      { href: '/business-intelligence', label: 'Business Intelligence' },
      { href: '/cloud-computing', label: 'Cloud Computing' },
      { href: '/crm', label: 'CRM' },
      { href: '/erp', label: 'ERP' },
      { href: '/global', label: 'Global' },
      { href: '/quality-control', label: 'Quality Control' },
      { href: '/security', label: 'Security' },
    ]),
  },
  secondary: {
    items: [
      { href: '/newsletter-signup', label: 'Newsletter Signup' },
      { href: '/video', label: 'Video' },
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
      { href: '/page/mbt-about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
      { href: '/page/mbt-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/mbt-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: sortNavItems([
        { href: '/best-practices', label: 'Best Practices' },
        { href: '/business-intelligence', label: 'Business Intelligence' },
        { href: '/cloud-computing', label: 'Cloud Computing' },
        { href: '/crm', label: 'CRM' },
        { href: '/erp', label: 'ERP' },
        { href: '/global', label: 'Global' },
        { href: '/quality-control', label: 'Quality Control' },
        { href: '/security', label: 'Security' },
      ]),
    },
    {
      label: 'Resources',
      items: [
        { href: '/videos', label: 'Videos' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/newsletter-signup', label: 'Newsletter Signup' },
        { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
        { href: '/page/mbt-about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/mbt-privacy-policy', label: 'Privacy Policy' },
        { href: '/page/mbt-terms-conditions', label: 'Terms & Conditions' },
        { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      ],
    },
  ],
};
