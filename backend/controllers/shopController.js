const Shop = require('../models/shopModel');
const factory = require('./handlerController');

exports.createShop = factory.createOne(Shop)
exports.deleteShop = factory.deleteOne(Shop)
exports.getAllShop = factory.getAll(Shop)
exports.getShopById = factory.getOne(Shop)
exports.updateShop = factory.updateOne(Shop)