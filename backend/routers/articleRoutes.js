const express = require('express');
const { createArticle, getAllArticle } = require('../controllers/articleController');

const router = express.Router();

router.route('/').post(createArticle).get(getAllArticle)

module.exports = router;
