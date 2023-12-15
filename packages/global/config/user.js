module.exports = {
  items: [
    {
      href: '/user/login',
      label: 'Sign In',
      when: 'logged-out',
      modifiers: ['user'],
    },
    {
      href: '/user/logout',
      label: 'Sign Out',
      when: 'logged-in',
      modifiers: ['user'],
    },
  ],
  tools: [
    {
      href: '/user/login',
      label: 'Sign In',
      when: 'logged-out',
      modifiers: ['user'],
    },
    {
      href: '/user/profile',
      label: 'Modify profile',
      when: 'logged-in',
      modifiers: ['user'],
    },
    {
      href: '/user/logout',
      label: 'Sign Out',
      when: 'logged-in',
      modifiers: ['user'],
    },
  ],
};
