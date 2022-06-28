const sortNavItems = require('@industrial-media/package-global/utils/sort-nav-items');

const subscribe = require('./subscribe');

const topics = sortNavItems([
  { href: '/automation', label: 'Automation' },
  { href: '/finishing-world', label: 'Finishing World' },
  { href: '/made-in-america', label: 'Made in America' },
  { href: '/new-products', label: 'New Products' },
  { href: '/operations', label: 'Operations' },
  { href: '/product-development', label: 'Product Development' },
  { href: '/software', label: 'Software' },
  { href: '/safety', label: 'Safety' },
  { href: '/supply-chain', label: 'Supply Chain' },
]);

const secondary = [
  { href: '/video', label: 'Video' },
  { href: '/podcast', label: 'Podcast' },
  { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
  { href: '/magazine', label: 'Magazine' },
];

const resources = [
  { href: '/video', label: 'Video' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/magazine', label: 'Magazine' },
  { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
];

const utilities = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=ien_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: 'https://tcc.dragonforms.com/loading.do?omedasite=TCC1_IEnew', label: 'Subscribe to Magazine', target: '_blank' },
];

const mobileMenu = {
  primary: [
    ...topics,
    ...secondary,
  ],
  secondary: [
    ...resources,
    subscribe,
  ],
};

const desktopMenu = {};

module.exports = {
  type: 'navbar-custom',
  promos: [
    {
      title: subscribe.label,
      callToAction: subscribe.label,
      link: subscribe.href,
    },
  ],
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
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
