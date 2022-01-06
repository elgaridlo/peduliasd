const Article = require('../models/articleModel');
const factory = require('./handlerController');

exports.createArticle = factory.createOne(Article)
exports.deleteArticle = factory.deleteOne(Article)
exports.getAllArticle = factory.getAll(Article)
exports.getArticleById = factory.getOne(Article)
exports.updateArticle = factory.updateOne(Article)
