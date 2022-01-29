const express = require('express');
const { createArticle, getAllArticle, updateArticle, getArticleById } = require('../controllers/articleController');

const router = express.Router();

router.route('/').post(createArticle).get(getAllArticle)

router.route('/:id').put(updateArticle).get(getArticleById);

module.exports = router;
