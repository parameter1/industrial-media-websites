const cheerio = require('cheerio');

module.exports = (html) => {
  const $ = cheerio.load(html);
  if ($.text()) return true;
  return false;
};
