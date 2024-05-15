const sortNavItems = require('@industrial-media/package-global/utils/sort-nav-items');
const user = require('@industrial-media/package-global/config/user');

const topics = sortNavItems([
  { href: '/topics/cardiovascular', label: 'Cardiovascular' },
  { href: '/topics/devices', label: 'Devices' },
  { href: '/topics/equipment', label: 'Equipment' },
  { href: '/topics/imaging', label: 'Imaging' },
  { href: '/topics/implantables', label: 'Implantables' },
  { href: '/products/new-products', label: 'New Products' },
  { href: '/topics/surgical', label: 'Surgical' },
  { href: '/topics/oncology', label: 'Oncology' },
]);

const secondary = [
  { href: '/video', label: 'Video' },
  { href: 'https://www.medicaldesigndevelopment.com/formstack/advertise_with_lm_medical_design_development', label: 'Advertise', target: '_blank' },
  { href: 'https://lynchmedia.dragonforms.com/loading.do?omedasite=cenmeddesdev_signup', label: 'Newsletter Signup', target: '_blank' },
];

const resources = [
  { href: '/news', label: 'News' },
  { href: '/video', label: 'Video' },
  { href: '/page/about-us', label: 'About Us' },
  { href: '/page/contact-us', label: 'Contact Us' },
  { href: 'https://www.medicaldesigndevelopment.com/formstack/advertise_with_lm_medical_design_development', label: 'Advertise', target: '_blank' },
];

const utilities = [
  { href: 'https://lynchmedia.dragonforms.com/loading.do?omedasite=cenmeddesdev_signup', label: 'Newsletter Signup', target: '_blank' },
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
      { href: 'https://www.medicaldesigndevelopment.com/formstack/advertise_with_lm_medical_design_development', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      { href: '/page/CCPA', label: 'CA Consumer Privacy Act' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
