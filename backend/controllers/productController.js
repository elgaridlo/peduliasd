
const Product = require('../models/productModel');
const appError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerController');
const fs = require('fs')
const {promisify} = require('util')
const unlinkAsync = promisify(fs.unlink)


exports.createProduct = factory.createOne(Product)
exports.deleteProduct = catchAsync (async(req, res, next) => {
    const product = await Product.findById(req.params.id)

    if(fs.existsSync(product.photo)){
        await unlinkAsync(product.photo.substring(1, product.photo.length))
    }

    if(!product) {
        return next(new appError(`Product tidak ditemukan!`, 404));
    } 

    await product.remove()
    res.json(
        {
            message: 'Product berhasil dihapus',
            id: product
        }
    )
})
exports.getAllProduct = factory.getAll(Product)
exports.getProductById = factory.getOne(Product)
exports.updateProduct = factory.updateOne(Product)