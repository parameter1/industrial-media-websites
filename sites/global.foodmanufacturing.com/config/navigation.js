const topics = [
  { href: '/capital-investment', label: 'Capital Investment' },
  { href: '/consumer-trends', label: 'Consumer Trends' },
  { href: '/facility', label: 'Facility' },
  { href: '/labeling', label: 'Labeling' },
  { href: '/labor', label: 'Labor' },
  { href: '/products', label: 'New Products' },
  { href: '/packaging', label: 'Packaging' },
  { href: '/recalls-alerts', label: 'Recalls/Alerts' },
  { href: '/safety', label: 'Safety' },
  { href: '/supply-chain', label: 'Supply Chain' },
];

const secondary = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=fm_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: '/video', label: 'Video' },
];

const resources = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=fm_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: 'https://ien.formstack.com/forms/advertise_with_lynch_media', label: 'Advertise', target: '_blank' },
];

const utilities = [
  { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=fm_signup', label: 'Newsletter Signup', target: '_blank' },
  { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
  { href: '/page/fm-about-us', label: 'About Us' },
  { href: '/contact-us', label: 'Contact Us' },
  { href: '/page/fm-privacy-policy', label: 'Privacy Policy' },
  { href: '/page/fm-terms-conditions', label: 'Terms & Conditions' },
  { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
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
      { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=fm_signup', label: 'Newsletter Signup', target: '_blank' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
      { href: '/page/fm-about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/fm-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/fm-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
    ],
  },
};
