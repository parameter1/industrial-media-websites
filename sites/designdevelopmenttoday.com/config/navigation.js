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
        { href: 'https://ien.formstack.com/forms/advertise_with_industrial_media', label: 'Advertise', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
        { href: '/page/CCPA', label: 'CA Consumer Privacy Act' },
        { href: '/site-map', label: 'Site Map' },
      ],
    },
  ],
};
