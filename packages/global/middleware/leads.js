const isOmedaId = value => /^[a-z0-9]{15}$/i.test(value);
const isExactTargetId = value => /^[0-9]+$/.test(value);

const extractOmedaId = (query) => {
  const legacy = query['lt.usr'];
  if (legacy && isOmedaId(legacy)) return legacy;
  const usr = query['__lt-usr'];
  if (usr && isOmedaId(usr)) return usr;
  return null;
};

const extractExactTargetId = (query) => {
  const legacy = query['lt.usr'];
  if (!legacy) return null;
  if (isOmedaId(legacy)) return null;
  return isExactTargetId(legacy) ? legacy : null;
};

const setCookie = (res, name, value) => {
  res.cookie(name, value, { maxAge: 365 * 24 * 60 * 60 * 1000 });
};

module.exports = ({
  cookieName = 'leads-idt',
  legacyCookieName = 'et-usr',
} = {}) => (req, res, next) => {
  const { cookies, query } = req;
  const identity = {
    id: cookies[cookieName] || null,
    legacyId: cookies[legacyCookieName] || null,
  };
  const omedaId = extractOmedaId(query);
  const exactTargetId = extractExactTargetId(query);
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
