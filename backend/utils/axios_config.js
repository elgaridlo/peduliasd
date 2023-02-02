const axios = require('axios')

const getConnection = async (path) => {
    return axios.default.get(`http://0.0.0.0:4300/${path}`)
}

const checker = async () => {
    try {
        await getConnection('api/checker')
    } catch (error) {
        throw Error('API server is off! Please run `pnpm set-up api`!')
    }
}

module.exports = {getConnection, checker}