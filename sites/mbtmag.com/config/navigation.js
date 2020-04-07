const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');

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
      { href: '/videos', label: 'Videos' },
    ],
  },
  tertiary: {
    items: [
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/mbt-about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/mbt-advertise', label: 'Advertise' },
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
        { href: '/page/mbt-advertise', label: 'Advertise' },
        { href: '/page/mbt-about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/mbt-privacy-policy', label: 'Privacy Policy' },
        { href: '/page/mbt-terms-conditions', label: 'Terms & Conditions' },
        { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      ],
    },
  ],
};
