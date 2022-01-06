const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const EducationProgram = require('../models/educationProgramModel');
const factory = require('./handlerController');

exports.createEducationProgram = factory.createOne(EducationProgram)
exports.updateEducationProgram = factory.updateOne(EducationProgram)
// exports.getAllEducationProgram = factory.getAll(EducationProgram)
exports.getEducationProgramById = factory.getOne(EducationProgram)
exports.deleteEducationProgram = factory.deleteOne(EducationProgram)

exports.getAllEducationProgram = catchAsync (async(req, res, next) => {
    const dataAll = await EducationProgram.find().populate('workshopType', 'description workshopType')

    res.status(200).json({
        status: 'Success',
        result: dataAll.length,
        data: dataAll,
    });
})