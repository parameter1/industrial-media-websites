const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/industries/aerospace', label: 'Aerospace' },
      { href: '/industries/automotive', label: 'Automotive' },
      { href: '/industries/manufacturing', label: 'Manufacturing' },
      { href: '/industries/medical', label: 'Medical' },
      { href: '/industries/military', label: 'Military' },
      { href: '/news', label: 'News' },
      { href: '/exclusives', label: 'Exclusives' },
      { href: '/video', label: 'Video' },
      { href: '/new-products', label: 'New Products' },
    ]),
  },
  secondary: {
    items: [
      { href: '/newsletter-signup', label: 'Newsletter Signup' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/advertise', label: 'Advertise' },
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
      { href: '/page/advertise', label: 'Advertise' },
      { href: '/page/privacy-policy', label: 'Privacy Policy' },
      { href: '/page/terms-conditions', label: 'Terms & Conditions' },
      { href: '/page/CCPA', label: 'CA Consumer Privacy Act' },
    ],
  },
  menu: [
    {
      label: 'Topics',
      items: sortNavItems([
        { href: '/industries/aerospace', label: 'Aerospace' },
        { href: '/industries/automotive', label: 'Automotive' },
        { href: '/industries/manufacturing', label: 'Manufacturing' },
        { href: '/industries/medical', label: 'Medical' },
        { href: '/industries/military', label: 'Military' },
        { href: '/news', label: 'News' },
        { href: '/exclusives', label: 'Exclusives' },
        { href: '/video', label: 'Video' },
        { href: '/new-products', label: 'New Products' },
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
        { href: '/newsletter-signup', label: 'Newsletter Signup' },
        { href: '/page/advertise', label: 'Advertise' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
        { href: '/page/CCPA', label: 'CA Consumer Privacy Act' },
      ],
    },
  ],
};
