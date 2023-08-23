const slug = require('slug');
const contactRedirects = require('./contact-redirects');
const companyRedirects = require('./company-redirects');

const getSizedImageRedirect = ({ from }) => {
  const matches = /^\/wp-content\/uploads\/.+(-([0-9]+)x([0-9]+))\.[a-z]+$/i.exec(from);
  if (matches && matches[1]) {
    const w = matches[2];
    const h = matches[3];
    const to = `${from.replace(matches[1], '')}?w=${w}&h=${h}&fit=crop&auto=format`;
    return { to };
  }
  return null;
};

const getFileRedirect = ({ from, app }) => {
  const { config, tenantKey } = app.locals;
  const matches = /^\/wp-content\/uploads\/sites\/\d+\/(.+)/.exec(from);
  if (!matches || !matches[1]) return null;

  // extract `2019/11/TLC_Attachments_combined3.pdf`
  // from `/wp-content/uploads/sites/5/2019/11/TLC_Attachments_combined3.pdf`
  // and convert to the migrated files folder for the current site
  const assetHost = config.website('assetHost');
  const siteKey = slug(config.website('shortName', config.website('name')));
  const [account, group] = tenantKey.split('_');
  const path = `files/base/${account}/${group}/migrated-files/${siteKey}`;
  const to = `https://${assetHost}/${path}/${matches[1]}`;
  return { to };
};

const getSiteRedirect = ({ from }) => {
  if (from === '/contact-us') {
    return { to: '/page/contact-us' };
  }

  return null;
};

const getContactRedirect = ({ from }) => {
  const found = contactRedirects.find((pair) => (new RegExp(`${pair.from}`)).test(from));
  if (found) return found;
  return null;
};

const getCompanyRedirect = ({ from }) => {
  const found = companyRedirects.find((pair) => (new RegExp(`${pair.from}`)).test(from));
  if (found) return found;
  return null;
};

module.exports = ({ from, app, req }) => {
  const siteRedirect = getSiteRedirect({ from, req });
  if (siteRedirect) return siteRedirect;
  const sizedImageRedirect = getSizedImageRedirect({ from });
  if (sizedImageRedirect) return sizedImageRedirect;
  if (getContactRedirect({ from })) return getContactRedirect({ from });
  if (getCompanyRedirect({ from })) return getCompanyRedirect({ from });
  return getFileRedirect({ from, app });
};
