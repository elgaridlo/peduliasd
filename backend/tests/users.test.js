const T = require('../utils/axios_config')
const Article = require('../models/articleModel')
const { getAPI } = require('./helperTest/apifake')

jest.setTimeout(10000)
describe('article apis', () => {

    beforeAll(async() => {
        await T.checker()
    })

    it('should get articles', async () => { 
        const getAll = await T.getConnection('api/article')

        expect(getAll.status).toEqual(200)
        expect(getAll.data.data[0]).toMatchObject({
            ...getAll.data.data[0],
            title: expect.any(String),
            poster: expect.any(String),
            content: expect.any(String),
            urlTitle: expect.any(String),
        })

        const filterSearch = 'Autistik'
        const getAllFilter = await T.getConnection(`api/article?title=${filterSearch}`)
        expect(getAllFilter.status).toEqual(200)
     })
})