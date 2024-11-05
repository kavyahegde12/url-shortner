
const shortid = require('shortid');

function generateShortUrl() {
  return shortid.generate();
}

module.exports = { generateShortUrl };
