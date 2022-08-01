const sortNavItems = require('@industrial-media/package-global/utils/sort-nav-items');

const topics = sortNavItems([
  { href: '/inventory-management', label: 'Inventory Management' },
  { href: '/maintenance', label: 'Maintenance' },
  { href: '/material-handling', label: 'Material Handling' },
  { href: '/operations', label: 'Operations' },
  { href: '/products', label: 'Products' },
  { href: '/safety', label: 'Safety' },
  { href: '/training-development', label: 'Training & Development' },
]);

const secondary = [
  { href: '/video', label: 'Video' },
];

const resources = [
  { href: '/video', label: 'Video' },
  { href: '/page/impo-about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
];

const utilities = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=impo_signup', label: 'Newsletter Signup', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics,
    ...secondary,
  ],
  secondary: [
    ...resources,
  ],
};

const desktopMenu = {};

module.exports = {
  type: 'navbar-custom',
  user: {
    items: [],
  },
  desktopMenu,
  mobileMenu,
  topics,
  primary: {
    items: [
      ...topics,
    ],
  },
  secondary: {
    items: [
      ...secondary,
    ],
  },
  tertiary: {
    items: [],
  },
  toggleMenu: {
    about: {
      // label: 'About',
      // items: utilities,
    },
    leftColumn: {
      label: 'Topics',
      items: [
        ...topics,
      ],
    },
    midColumn: {
      items: [
        ...resources,
      ],
    },
    rightColumn: {
      label: 'User Tools',
      items: utilities,
    },
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
};
