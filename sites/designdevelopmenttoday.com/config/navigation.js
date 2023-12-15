const sortNavItems = require('@industrial-media/package-global/utils/sort-nav-items');
const user = require('@industrial-media/package-global/config/user');

const topics = sortNavItems([
  { href: '/industries/aerospace', label: 'Aerospace' },
  { href: '/industries/automotive', label: 'Automotive' },
  { href: '/exclusives', label: 'Exclusives' },
  { href: '/industries/manufacturing', label: 'Manufacturing' },
  { href: '/industries/medical', label: 'Medical' },
  { href: '/industries/military', label: 'Military' },
  { href: '/news', label: 'News' },
  { href: '/new-products', label: 'New Products' },
]);

const secondary = [
  { href: '/video', label: 'Video' },
  { href: 'https://www.designdevelopmenttoday.com/formstack/advertise_with_im_ddt', label: 'Advertise', target: '_blank' },
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=ddt_signup', label: 'Newsletter Signup', target: '_blank' },
];

const resources = [
  { href: '/video', label: 'Video' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://www.designdevelopmenttoday.com/formstack/advertise_with_im_ddt', label: 'Advertise', target: '_blank' },
];

const utilities = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=ddt_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: 'https://ien.formstack.com/forms/today_in_manufacturing_podcast', label: 'Subscribe - Today in Manufacturing Podcast', target: '_blank' },
  { href: 'https://ien.formstack.com/forms/industrial_media_security_breach_podcast', label: 'Subscribe - Security Breach Podcast', target: '_blank' },
  { href: 'https://www.designdevelopmenttoday.com/formstack/advertise_with_im_ddt', label: 'Advertise', target: '_blank' },
  { href: '/page/about-us', label: 'About Us' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: '/page/privacy-policy', label: 'Privacy Policy' },
  { href: '/page/terms-conditions', label: 'Terms & Conditions' },
  { href: '/page/CCPA', label: 'CA Consumer Privacy Act' },
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
      { href: '/page/about-us', label: 'About Us' },
      { href: '/page/contact-us', label: 'Contact Us' },
      { href: 'https://www.designdevelopmenttoday.com/formstack/advertise_with_im_ddt', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      { href: '/page/CCPA', label: 'CA Consumer Privacy Act' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
