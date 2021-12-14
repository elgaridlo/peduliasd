const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const WorkShop = require('../models/workshopModel');
const factory = require('./handlerController');
const User = require('../models/userModel');

exports.createWorkshop = factory.createOne(WorkShop)
exports.updateWorkshop = factory.updateOne(WorkShop)
exports.getAllWorkshop = factory.getAll(WorkShop)
exports.getWorkshopById = factory.getOne(WorkShop)
exports.deleteWorkshop = factory.deleteOne(WorkShop)
