const dotenv = require('dotenv')

const dev = process.env.NODE_ENV !== 'production'

if (dev) dotenv.config()

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    MELI_API_URL: process.env.MELI_API_URL
  }
}
