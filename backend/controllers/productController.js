
const Product = require('../models/productModel');
const factory = require('./handlerController');

exports.createProduct = factory.createOne(Product)
exports.deleteProduct = factory.deleteOne(Product)
exports.getAllProduct = factory.getAll(Product)
exports.getProductById = factory.getOne(Product)
exports.updateProduct = factory.updateOne(Product)