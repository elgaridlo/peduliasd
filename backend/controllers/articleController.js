const fs = require('fs')
const {promisify} = require('util')
const Article = require('../models/articleModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerController');
const unlinkAsync = promisify(fs.unlink)

exports.createArticle = factory.createOne(Article)
exports.getAllArticle = factory.getAll(Article)
exports.getArticleById = factory.getOne(Article)
exports.updateArticle = factory.updateOne(Article)

exports.deleteArticle = catchAsync (async(req, res, next) => {
    const article = await Article.findById(req.params.id)
    await unlinkAsync(article.poster.substring(1, article.poster.length))

    if(!article) {
        return next(new AppError(`Program Edukasi tidak ditemukan!`, 404));
    } 

    await article.remove()
    res.json(
        {
            message: 'Program Edukasi berhasil dihapus',
            id: article
        }
    )
})