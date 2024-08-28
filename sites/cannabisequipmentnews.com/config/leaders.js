// const enabled = (process.env.LEADERS_ENABLED === 'true' || process.env.LEADERS_ENABLED === true) || false;

module.exports = {
  enabled: true,
  title: 'Cannabis Connect',
  alias: process.env.LEADERS_ALIAS || 'leaders/2025',
};
