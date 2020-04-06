const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: [
      { href: '/inventory-management', label: 'Inventory Management' },
      { href: '/maintenance', label: 'Maintenance' },
      { href: '/material-handling', label: 'Material Handling' },
      { href: '/operations', label: 'Operations' },
      { href: '/products', label: 'Products' },
      { href: '/safety', label: 'Safety' },
      { href: '/training-development', label: 'Training & Development' },
    ],
  },
  secondary: {
    items: [
      { href: '/newsletter-signup', label: 'Newsletter Signup' },
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
      { href: '/page/impo-about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/impo-advertise', label: 'Advertise' },
      { href: '/page/impo-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/impo-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: [
        { href: '/inventory-management', label: 'Inventory Management' },
        { href: '/maintenance', label: 'Maintenance' },
        { href: '/material-handling', label: 'Material Handling' },
        { href: '/operations', label: 'Operations' },
        { href: '/products', label: 'Products' },
        { href: '/safety', label: 'Safety' },
        { href: '/training-development', label: 'Training & Development' },
      ],
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
        { href: '/page/impo-advertise', label: 'Advertise' },
        { href: '/page/impo-about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/impo-privacy-policy', label: 'Privacy Policy' },
        { href: '/page/impo-terms-conditions', label: 'Terms & Conditions' },
        { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      ],
    },
  ],
};
