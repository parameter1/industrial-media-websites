const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/cultivation', label: 'Cultivation' },
      { href: '/distribution', label: 'Distribution' },
      { href: '/extraction', label: 'Extraction' },
      { href: '/manufacturing', label: 'Manufacturing' },
      { href: '/packaging', label: 'Packaging' },
      { href: '/news', label: 'News' },
      { href: '/processing', label: 'Processing' },
      { href: '/new-products', label: 'New Products' },
    ]),
  },
  secondary: {
    items: [
      { href: '/newsletter-signup', label: 'Newsletter Signup' },
      { href: '/video', label: 'Video' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/advertise', label: 'Advertise' },
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
        { href: '/cultivation', label: 'Cultivation' },
        { href: '/distribution', label: 'Distribution' },
        { href: '/extraction', label: 'Extraction' },
        { href: '/manufacturing', label: 'Manufacturing' },
        { href: '/packaging', label: 'Packaging' },
        { href: '/news', label: 'News' },
        { href: '/processing', label: 'Processing' },
      ]),
    },
    {
      label: 'Resources',
      items: [
        { href: '/video', label: 'Video' },
        { href: '/contact-us', label: 'Contact Us' },
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
