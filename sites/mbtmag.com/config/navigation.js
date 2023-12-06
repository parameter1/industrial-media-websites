const sortNavItems = require('@industrial-media/package-global/utils/sort-nav-items');

const topics = sortNavItems([
  { href: '/artificial-intelligence', label: 'Artificial Intelligence' },
  { href: '/cloud-computing', label: 'Cloud Computing' },
  { href: '/cybersecurity', label: 'Cybersecurity' },
  { href: '/global', label: 'Global' },
  { href: '/industry-4-0', label: 'Industry 4.0' },
  { href: '/operations', label: 'Operations' },
  { href: '/quality-control', label: 'Quality Control' },
  { href: '/software', label: 'Software' },
]);

const secondary = [
  { href: '/video', label: 'Video' },
  { href: 'https://www.mbtmag.com/formstack/advertise_with_im_mbt', label: 'Advertise', target: '_blank' },
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=mbt_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: '/podcast', label: 'Podcast' },
];

const resources = [
  { href: '/video', label: 'Video' },
  { href: '/podcast', label: 'Podcast' },
  { href: '/page/mbt-about-us', label: 'About Us' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://www.mbtmag.com/formstack/advertise_with_im_mbt', label: 'Advertise', target: '_blank' },
];

const utilities = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=mbt_signup', label: 'Newsletter Signup', target: '_blank' },
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
      { href: '/page/mbt-about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://www.mbtmag.com/formstack/advertise_with_im_mbt', label: 'Advertise', target: '_blank' },
      { href: '/page/mbt-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/mbt-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
