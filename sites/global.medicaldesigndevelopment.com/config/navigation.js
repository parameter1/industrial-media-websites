const topics = [
  { href: '/topics/cardiovascular', label: 'Cardiovascular' },
  { href: '/topics/devices', label: 'Devices' },
  { href: '/topics/equipment', label: 'Equipment' },
  { href: '/topics/imaging', label: 'Imaging' },
  { href: '/topics/implantables', label: 'Implantables' },
  { href: '/products/new-products', label: 'New Products' },
  { href: '/topics/surgical', label: 'Surgical' },
];

const secondary = [
  { href: 'https://lynchmedia.dragonforms.com/loading.do?omedasite=cenmeddesdev_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: 'https://ien.formstack.com/forms/advertise_with_lynch_media', label: 'Advertise', target: '_blank' },
];

const resources = [
  { href: '/page/about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
];

const utilities = [];

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
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_lynch_media', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      { href: '/page/CCPA', label: 'CA Consumer Privacy Act' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
};
