const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const WorkShop = require('../models/workshopModel');
const factory = require('./handlerController');
const User = require('../models/userModel');

// exports.createWorkshop = factory.createOne(WorkShop)
exports.updateWorkshop = factory.updateOne(WorkShop)
exports.getAllWorkshop = factory.getAll(WorkShop)
exports.getWorkshopById = factory.getOne(WorkShop)
exports.deleteWorkshop = factory.deleteOne(WorkShop)

exports.createWorkshop = catchAsync (async(req, res, next) => {
    const {workshopType, description, pdfLink} = req.body
    
    const createNew = await WorkShop.create({
        workshopType, 
        description: `${workshopType.split('Class')[0].charAt(0).toUpperCase()}${workshopType.split('Class')[0].slice(1)} - ${description}`, 
        pdfLink
    })

    res.status(200).json({
        status: 'Success',
        data: createNew,
    });
})