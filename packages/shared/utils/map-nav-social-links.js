module.exports = ({ links, modifiers } = {}) => links.map(link => ({
  href: link.href,
  icon: link.provider,
  target: '_blank',
  modifiers,
}));
