const mapSocialLinks = require('@industrial-media/package-shared/utils/map-nav-social-links');
const sortNavItems = require('@industrial-media/package-shared/utils/sort-nav-items');
const socialLinks = require('./social-links');

module.exports = {
  primary: {
    items: sortNavItems([
      { href: '/cardiovascular', label: 'Cardiovascular' },
      { href: '/devices', label: 'Devices' },
      { href: '/imaging', label: 'Imaging' },
      { href: '/implantables', label: 'Implantables' },
      { href: '/equipment', label: 'Equipment' },
      { href: '/orthopedic', label: 'Orthopedic' },
      { href: '/surgical', label: 'Surgical' },
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
        { href: '/cardiovascular', label: 'Cardiovascular' },
        { href: '/devices', label: 'Devices' },
        { href: '/imaging', label: 'Imaging' },
        { href: '/implantables', label: 'Implantables' },
        { href: '/equipment', label: 'Equipment' },
        { href: '/orthopedic', label: 'Orthopedic' },
        { href: '/surgical', label: 'Surgical' },
      ]),
    },
    {
      label: 'Products',
      items: sortNavItems([
        { href: '/contract-manufacturing', label: 'Contract Manufacturing' },
        { href: '/electronic-components', label: 'Electronic Components' },
        { href: '/extrusions', label: 'Extrusions' },
        { href: '/materials', label: 'Materials' },
        { href: '/motion-contol', label: 'Motion Control' },
        { href: '/prototyping', label: 'Prototyping' },
        { href: '/pumps', label: 'Pumps' },
        { href: '/tubing', label: 'Tubing' },
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
