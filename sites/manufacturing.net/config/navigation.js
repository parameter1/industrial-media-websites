const sortNavItems = require('@industrial-media/package-global/utils/sort-nav-items');
const user = require('@industrial-media/package-global/config/user');

const topics = sortNavItems([
  { href: '/aerospace', label: 'Aerospace' },
  { href: '/artificial-intelligence', label: 'Artificial Intelligence' },
  { href: '/automotive', label: 'Automotive' },
  { href: '/energy', label: 'Energy' },
  { href: '/industry40', label: 'Industry 4.0' },
  { href: '/cybersecurity', label: 'Cybersecurity' },
  { href: '/operations', label: 'Operations' },
  { href: '/software', label: 'Software' },
  { href: '/supply-chain', label: 'Supply Chain' },
]);

const secondary = [
  { href: '/video', label: 'Video' },
  { href: 'https://www.manufacturing.net/formstack/advertise_with_im_mnet', label: 'Advertise', target: '_blank' },
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=mnet_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: '/podcast', label: 'Podcast' },
];

const resources = [
  { href: '/video', label: 'Video' },
  { href: '/page/mnet-about-us', label: 'About Us' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://www.manufacturing.net/formstack/advertise_with_im_mnet', label: 'Advertise', target: '_blank' },
];

const utilities = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=mnet_signup', label: 'Newsletter Signup', target: '_blank' },
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
      { href: '/page/mnet-about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://www.manufacturing.net/formstack/advertise_with_im_mnet', label: 'Advertise', target: '_blank' },
      { href: '/page/mnet-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/mnet-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
