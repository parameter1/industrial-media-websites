module.exports = payload => `https://leads.ien.com/api/et?p=${encodeURIComponent(JSON.stringify(payload))}`;
