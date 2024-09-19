const user = require('@industrial-media/package-global/config/user');

const topics = [
  { href: '/big-50', label: 'Big 50' },
  { href: '/business-technology', label: 'Business Technology' },
  { href: '/economy', label: 'Economy' },
  { href: '/mergers-acquisitions', label: 'Mergers & Acquisitions' },
  { href: '/new-products', label: 'New Products' },
  { href: '/operations', label: 'Operations' },
  { href: '/sales', label: 'Sales' },
  { href: '/staffing-changes', label: 'Staffing Changes' },
  { href: '/supply-chain', label: 'Supply Chain' },
  { href: '/5-minutes-with-id', label: '5 Minutes with ID' },
];

const secondary = [
  { href: '/page/id-about-us', label: 'Since 1911' },
  { href: '/video', label: 'Video' },
  { href: 'https://www.inddist.com/formstack/advertise_with_im_id', label: 'Advertise', target: '_blank' },
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=id_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: '/magazine', label: 'Magazine' },
];

const resources = [
  { href: '/video', label: 'Video' },
  { href: '/page/id-about-us', label: 'About Us' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://www.inddist.com/formstack/advertise_with_im_id', label: 'Advertise', target: '_blank' },
];

const utilities = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=id_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: 'https://ien.formstack.com/forms/today_in_manufacturing_podcast', label: 'Subscribe - Today in Manufacturing Podcast', target: '_blank' },
  { href: 'https://ien.formstack.com/forms/industrial_media_security_breach_podcast', label: 'Subscribe - Security Breach Podcast', target: '_blank' },
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
  user,
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
        { href: '/workforce-development', label: 'Workforce' },
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
      { href: '/page/id-about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://www.inddist.com/formstack/advertise_with_im_id', label: 'Advertise', target: '_blank' },
      { href: '/page/id-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/id-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
