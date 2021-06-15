const isOmedaId = value => /^[a-z0-9]{15}$/i.test(value);
const isExactTargetId = value => /^[0-9]+$/.test(value);

const extractOmedaId = (query, name) => {
  const usr = query[name];
  if (!usr) return null;
  return isOmedaId(usr) ? usr : null;
};

const extractExactTargetId = (query, name) => {
  const usr = query[name];
  if (!usr) return null;
  if (isOmedaId(usr)) return null;
  return isExactTargetId(usr) ? usr : null;
};

const setCookie = (res, name, value) => {
  res.cookie(name, value, { maxAge: 365 * 24 * 60 * 60 * 1000 });
};

module.exports = ({
  queryParamName = 'lt.usr',
  cookieName = 'leads-idt',
  legacyCookieName = 'et-usr',
} = {}) => (req, res, next) => {
  const { cookies, query } = req;
  const identity = {
    id: cookies[cookieName] || null,
    legacyId: cookies[legacyCookieName] || null,
  };
  const omedaId = extractOmedaId(query, queryParamName);
  const exactTargetId = extractExactTargetId(query, queryParamName);
  if (omedaId) {
    setCookie(res, cookieName, omedaId);
    identity.id = omedaId;
  }
  if (exactTargetId) {
    setCookie(res, legacyCookieName, exactTargetId);
    identity.legacyId = exactTargetId;
  }
  res.locals.leads = { identity };
  next();
};
