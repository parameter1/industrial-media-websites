const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/aerospace', label: 'Aerospace' },
      { href: '/automotive', label: 'Automotive' },
      { href: '/energy', label: 'Energy' },
      { href: '/industry40', label: 'Industry 4.0' },
      { href: '/labor', label: 'Labor' },
      { href: '/operations', label: 'Operations' },
      { href: '/software', label: 'Software' },
      { href: '/supply-chain', label: 'Supply Chain' },
    ]),
  },
  secondary: {
    items: [
      { href: '/newsletter-signup', label: 'Newsletter Signup' },
      { href: '/video', label: 'Video' },
      { href: '/podcast', label: 'Podcast' },
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
      { href: '/page/mnet-about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
      { href: '/page/mnet-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/mnet-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      { href: '/site-map', label: 'Site Map' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: sortNavItems([
        { href: '/aerospace', label: 'Aerospace' },
        { href: '/automotive', label: 'Automotive' },
        { href: '/energy', label: 'Energy' },
        { href: '/industry40', label: 'Industry 4.0' },
        { href: '/labor', label: 'Labor' },
        { href: '/operations', label: 'Operations' },
        { href: '/software', label: 'Software' },
        { href: '/supply-chain', label: 'Supply Chain' },
      ]),
    },
    {
      label: 'Resources',
      items: [
        { href: '/videos', label: 'Videos' },
        { href: '/podcast', label: 'Podcast' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/newsletter-signup', label: 'Newsletter Signup' },
        { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
        { href: '/page/mnet-about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/mnet-privacy-policy', label: 'Privacy Policy' },
        { href: '/page/mnet-terms-conditions', label: 'Terms & Conditions' },
        { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
        { href: '/site-map', label: 'Site Map' },
      ],
    },
  ],
};
