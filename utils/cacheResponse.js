const config = require('../config')

function cacheResponse (res) {
  if (!config.dev) {
    res.set('Cache-Control', `public, max-age=${config.cacheControlTime}`)
  }
}

module.exports = cacheResponse
