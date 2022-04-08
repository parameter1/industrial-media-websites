const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/topics/cardiovascular', label: 'Cardiovascular' },
      { href: '/topics/devices', label: 'Devices' },
      { href: '/topics/imaging', label: 'Imaging' },
      { href: '/topics/implantables', label: 'Implantables' },
      { href: '/topics/equipment', label: 'Equipment' },
      { href: '/products/new-products', label: 'New Products' },
      { href: '/topics/surgical', label: 'Surgical' },
    ]),
  },
  secondary: {
    items: [
      { href: 'https://lynchmedia.dragonforms.com/loading.do?omedasite=cenmeddesdev_signup', label: 'Newsletter Signup', target: '_blank' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: 'https://ien.formstack.com/forms/advertise_with_lynch_media', label: 'Advertise', target: '_blank' },
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
      { href: 'https://ien.formstack.com/forms/advertise_with_lynch_media', label: 'Advertise', target: '_blank' },
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
        { href: '/topics/cardiovascular', label: 'Cardiovascular' },
        { href: '/topics/devices', label: 'Devices' },
        { href: '/topics/imaging', label: 'Imaging' },
        { href: '/topics/implantables', label: 'Implantables' },
        { href: '/topics/equipment', label: 'Equipment' },
        { href: '/topics/orthopedic', label: 'Orthopedic' },
        { href: '/topics/surgical', label: 'Surgical' },
      ]),
    },
    {
      label: 'Products',
      items: sortNavItems([
        { href: '/products/contract-manufacturing', label: 'Contract Manufacturing' },
        { href: '/products/electronic-components', label: 'Electronic Components' },
        { href: '/products/extrusions', label: 'Extrusions' },
        { href: '/products/materials', label: 'Materials' },
        { href: '/products/motion-contol', label: 'Motion Control' },
        { href: '/products/prototyping', label: 'Prototyping' },
        { href: '/products/pumps', label: 'Pumps' },
        { href: '/products/tubing', label: 'Tubing' },
        { href: '/products/new-products', label: 'New Products' },
      ]),
    },
    {
      label: 'User Tools',
      items: [
        { href: 'https://lynchmedia.dragonforms.com/loading.do?omedasite=cenmeddesdev_signup', label: 'Newsletter Signup', target: '_blank' },
        { href: 'https://ien.formstack.com/forms/advertise_with_lynch_media', label: 'Advertise', target: '_blank' },
        { href: '/page/about-us', label: 'About Us' },
        { href: '/contact-us', label: 'Contact Us' },
        { href: '/page/privacy-policy', label: 'Privacy Policy' },
        { href: '/page/terms-conditions', label: 'Terms & Conditions' },
        { href: '/page/CCPA', label: 'CA Consumer Privacy Act' },
      ],
    },
  ],
};
