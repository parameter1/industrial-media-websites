const { isArray } = Array;

module.exports = ({ site }) => {
  const idxConfig = site.get('identityX');

  const enabled = site.get('idxNavItems.enable');
  if (!enabled) return;
  const defaultTargets = [
    'navigation.user.items',
  ];
  const targets = site.getAsArray('idxNavItems.navigationTargets').length ? site.getAsArray('idxNavItems.navigationTargets') : defaultTargets;
  const navConfig = [
    {
      href: idxConfig.getEndpointFor('login'),
      label: 'Sign In',
      when: 'logged-out',
      modifiers: ['user', 'user-login'],
    },
    {
      href: idxConfig.getEndpointFor('profile'),
      label: 'Manage Account',
      when: 'logged-in',
      modifiers: ['user', 'user-manage'],
    },
    {
      href: idxConfig.getEndpointFor('logout'),
      label: 'Sign Out',
      when: 'logged-in',
      modifiers: ['user', 'user-logout'],
    },
    // {
    //   href: idxConfig.getEndpointFor('register'),
    //   label: 'Sign Up',
    //   when: 'logged-out',
    //   modifiers: ['user'],
    // },
  ];
  targets.forEach((target) => {
    const nav = site.get(target);
    if (isArray(nav)) nav.unshift(...navConfig);
  });
};
