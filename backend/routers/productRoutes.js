const express = require('express');
const { protect, restrictTo } = require('../controllers/authController');
const { createProduct, getAllProduct, updateProduct, getProductById } = require('../controllers/productController');

const router = express.Router();

router.route('/').post(protect, restrictTo('admin'), createProduct).get(getAllProduct)

router.route('/:id').put(protect, restrictTo('admin'), updateProduct).get(getProductById);

module.exports = router;
