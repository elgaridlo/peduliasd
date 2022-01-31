const express = require('express');
const { createArticle, getAllArticle, updateArticle, getArticleById } = require('../controllers/articleController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router();

router.route('/').post(protect, restrictTo('admin'), createArticle).get(getAllArticle)

router.route('/:id').put(protect, restrictTo('admin'), updateArticle).get(getArticleById);

module.exports = router;
