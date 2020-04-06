module.exports = ({ links } = {}) => links.map(link => ({ href: link.href, icon: link.provider, target: '_blank' }));
