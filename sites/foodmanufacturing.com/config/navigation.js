const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/capital-investment', label: 'Capital Investment' },
      { href: '/consumer-trends', label: 'Consumer Trends' },
      { href: '/facility', label: 'Facility' },
      { href: '/ingredients', label: 'Ingredients' },
      { href: '/labeling', label: 'Labeling' },
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
      { href: 'https://ien.wufoo.com/forms/m1789xl4052dm1c/', label: 'Subscribe', target: '_blank' },
      { href: '/videos', label: 'Videos' },
    ],
  },
  tertiary: {
    items: [
      ...mapSocialLinks({ links: socialLinks }),
      { href: '/search', label: 'Search', icon: 'search' },
    ],
  },
  footer: {
    items: [
      { href: '/page/fm-about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/page/fm-advertise', label: 'Advertise' },
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
        { href: '/ingredients', label: 'Ingredients' },
        { href: '/labeling', label: 'Labeling' },
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
        { href: '/page/fm-advertise', label: 'Advertise' },
        { href: '/page/fm-about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/fm-privacy-policy', label: 'Privacy Policy' },
        { href: '/page/fm-terms-conditions', label: 'Terms & Conditions' },
        { href: 'https://www.manufacturing.net/page/CCPA', label: 'CA Consumer Privacy Act', target: '_blank' },
      ],
    },
  ],
};
