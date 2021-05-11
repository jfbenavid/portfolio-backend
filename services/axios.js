const axios = require('axios')
const config = require('../config')

const instance = axios.create({
  baseURL: config.externalApiBaseUrl
})

const successStatuses = [200, 201, 202, 204, 206, 207]

const checkSuccessStatus = status => {
  if (!successStatuses.includes(status)) {
    throw new Error('Error from api')
  }
}

const adapter = {
  get: async url => {
    const response = await instance.get(url)
    checkSuccessStatus(response.status)

    return response.data
  },
  post: async (url, body) => {

  },
  put: async (url, body) => {

  },
  delete: async (url) => {

  }
}

module.exports = adapter
