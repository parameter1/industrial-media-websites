const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/capital-investment', label: 'Capital Investment' },
      { href: '/consumer-trends', label: 'Consumer Trends' },
      { href: '/facility', label: 'Facility' },
      { href: '/labeling', label: 'Labeling' },
      { href: '/labor', label: 'Labor' },
      { href: '/packaging', label: 'Packaging' },
      { href: '/products', label: 'New Products' },
      { href: '/supply-chain', label: 'Supply Chain' },
      { href: '/recalls-alerts', label: 'Recalls/Alerts' },
      { href: '/safety', label: 'Safety' },
    ]),
  },
  secondary: {
    items: [
      { href: '/newsletter-signup', label: 'Newsletter Signup' },
      { href: '/video', label: 'Video' },
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
      { href: '/page/fm-about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
      { href: '/page/fm-privacy-policy', label: 'Privacy Policy' },
      { href: '/page/fm-terms-conditions', label: 'Terms & Conditions' },
      { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: sortNavItems([
        { href: '/capital-investment', label: 'Capital Investment' },
        { href: '/consumer-trends', label: 'Consumer Trends' },
        { href: '/facility', label: 'Facility' },
        { href: '/labeling', label: 'Labeling' },
        { href: '/labor', label: 'Labor' },
        { href: '/packaging', label: 'Packaging' },
        { href: '/products', label: 'Products' },
        { href: '/supply-chain', label: 'Supply Chain' },
        { href: '/recalls-alerts', label: 'Recalls/Alerts' },
        { href: '/safety', label: 'Safety' },
      ]),
    },
    {
      label: 'Resources',
      items: [
        { href: '/videos', label: 'Videos' },
      ],
    },
    {
      label: 'User Tools',
      items: [
        { href: '/newsletter-signup', label: 'Newsletter Signup' },
        { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
        { href: '/page/fm-about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/fm-privacy-policy', label: 'Privacy Policy' },
        { href: '/page/fm-terms-conditions', label: 'Terms & Conditions' },
        { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      ],
    },
  ],
};
