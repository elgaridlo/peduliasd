const Article = require("../../models/articleModel")

const getAPI = async (Model, query) => {
    const length = await Article.find(query).exec()
    console.log('length:', length)
    return length
}

module.exports = {getAPI}