const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/', label: '' },
      { href: '/', label: '' },
      { href: '/', label: '' },
      { href: '/', label: '' },
      { href: '/', label: '' },
      { href: '/', label: '' },
      { href: '/', label: '' },
      { href: '/', label: '' },
      { href: '/', label: '' },
    ]),
  },
  secondary: {
    items: [
      { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=ddt_signup', label: 'Newsletter Signup', target: '_blank' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
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
      { href: '/page/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      { href: '/page/CCPA', label: 'CA Consumer Privacy Act' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: sortNavItems([
        { href: '/', label: '' },
        { href: '/', label: '' },
        { href: '/', label: '' },
        { href: '/', label: '' },
        { href: '/', label: '' },
        { href: '/', label: '' },
        { href: '/', label: '' },
        { href: '/', label: '' },
        { href: '/', label: '' },
      ]),
    },
    {
      label: 'Resources',
      items: [
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: 'https://industrialmedia.dragonforms.com/loading.do?omedasite=ddt_signup', label: 'Newsletter Signup', target: '_blank' },
        { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
        { href: '/page/CCPA', label: 'CA Consumer Privacy Act' },
      ],
    },
  ],
};
