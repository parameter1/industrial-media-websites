const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/inventory-management', label: 'Inventory Management' },
      { href: '/maintenance', label: 'Maintenance' },
      { href: '/material-handling', label: 'Material Handling' },
      { href: '/operations', label: 'Operations' },
      { href: '/products', label: 'Products' },
      { href: '/safety', label: 'Safety' },
      { href: '/training-development', label: 'Training & Development' },
    ]),
  },
  secondary: {
    items: [
      { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=impo_signup', label: 'Newsletter Signup', target: '_blank' },
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
      { href: '/page/impo-about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
      { href: '/page/impo-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/impo-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: sortNavItems([
        { href: '/inventory-management', label: 'Inventory Management' },
        { href: '/maintenance', label: 'Maintenance' },
        { href: '/material-handling', label: 'Material Handling' },
        { href: '/operations', label: 'Operations' },
        { href: '/products', label: 'Products' },
        { href: '/safety', label: 'Safety' },
        { href: '/training-development', label: 'Training & Development' },
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
        { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=impo_signup', label: 'Newsletter Signup', target: '_blank' },
        { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
        { href: '/page/impo-about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/impo-privacy-policy', label: 'Privacy Policy' },
        { href: '/page/impo-terms-conditions', label: 'Terms & Conditions' },
        { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      ],
    },
  ],
};
