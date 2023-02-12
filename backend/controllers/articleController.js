const fs = require('fs')
const { promisify } = require('util')
const Article = require('../models/articleModel')
const catchAsync = require('../utils/catchAsync')
const factory = require('./handlerController')
const unlinkAsync = promisify(fs.unlink)

exports.createArticle = factory.createOne(Article)
// exports.getAllArticle = factory.getAll(Article)
exports.getAllArticle = catchAsync(async (req, res, next) => {

  const page = req.query.page * 1 || 1; // || 1 mean the default is 1
  const size = req.query.size * 1 || 100;
  const skip = (page - 1) * size;

  let filter = {}
  
  if(req.query.title) {
    filter = { title: { $regex: `.*${req.query.title}*.` } }
  }

  const articles = await Article.find(filter)
    .limit(size)
    .skip(skip)
    .sort('-createdAt')

  res.status(200).json({
    status: 'Success',
    data: articles,
    page: {
      rows: articles.length,
      size,
      page:skip
    }
  })
})

exports.getArticleById = catchAsync(async (req, res, next) => {
  const article = await Article.findOne({ urlTitle: req.params.id }).exec()

  if (!article) {
    return next(new AppError('Artikel tidak ditemukan', 404))
  }

  res.status(200).json({
    status: 'Success',
    data: article,
  })
})
exports.updateArticle = catchAsync(async (req, res, next) => {
  const article = await Article.findOne({ urlTitle: req.params.id }).exec()

  if (!article) {
    return next(new AppError('Artikel tidak ditemukan', 404))
  }

  const doc = await Article.findByIdAndUpdate(article._id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    status: 'Success',
    data: doc,
  })
})

factory.updateOne(Article)

exports.deleteArticle = catchAsync(async (req, res, next) => {
  const article = await Article.findById(req.params.id)

  if (fs.existsSync(article.poster)) {
    await unlinkAsync(article.poster.substring(1, article.poster.length))
  }

  if (!article) {
    return next(new AppError(`Program Edukasi tidak ditemukan!`, 404))
  }

  await article.remove()
  res.json({
    message: 'Program Edukasi berhasil dihapus',
    id: article,
  })
})
