const T = require('../utils/axios_config')
describe('users', () => {

    beforeAll(async() => {
        await T.checker()
    })

    it('should first', async () => { 
        const getAll = await (await T.getConnection('api/article')).data

        console.log(getAll.data.length)
        expect(getAll.data.length > 1).toEqual(true)
     })
})