const { isArray } = Array;

module.exports = ({ site }) => {
  const idxConfig = site.get('identityX');
  const navConfig = [
    {
      href: idxConfig.getEndpointFor('login'),
      label: 'Log In',
      when: 'logged-out',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('profile'),
      label: 'My Profile',
      when: 'logged-in',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('logout'),
      label: 'Log Out',
      when: 'logged-in',
      modifiers: ['user'],
    },
    {
      href: idxConfig.getEndpointFor('register'),
      label: 'Register',
      when: 'logged-out',
      modifiers: ['user'],
    },
  ];

  const navItems = site.get('navigation.tertiary.items');
  if (isArray(navItems)) navItems.unshift(...navConfig);
};
