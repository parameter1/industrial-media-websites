const enabled = (process.env.LEADERS_ENABLED === 'true' || process.env.LEADERS_ENABLED === true) || false;

module.exports = {
  enabled,
  title: 'Cannabis Connect',
  alias: process.env.LEADERS_ALIAS || 'leaders/2025',
  header: {
    imgSrc: process.env.LEADERS_LOGO || 'https://img.cannabisequipmentnews.com/files/base/indm/all/site-logos/cen.svg?h=70&auto=format,compress',
    imgSrcset: process.env.LEADERS_LOGO || 'https://img.cannabisequipmentnews.com/files/base/indm/all/site-logos/cen.svg?h=70&auto=format,compress&dpr=2 2x',
  },
};