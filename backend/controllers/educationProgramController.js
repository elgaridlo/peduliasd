const fs = require('fs')
const {promisify} = require('util')
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const EducationProgram = require('../models/educationProgramModel');
const factory = require('./handlerController');
// untuk mendelete gambar dari storage
const unlinkAsync = promisify(fs.unlink)

exports.createEducationProgram = factory.createOne(EducationProgram)
exports.updateEducationProgram = factory.updateOne(EducationProgram)
// exports.getAllEducationProgram = factory.getAll(EducationProgram)
exports.getEducationProgramById = factory.getOne(EducationProgram, 'workshopType')
// exports.deleteEducationProgram = factory.deleteOne(EducationProgram)

exports.getAllEducationProgram = catchAsync (async(req, res, next) => {
    const dataAll = await EducationProgram.find().populate('workshopType', 'description workshopType')

    res.status(200).json({
        status: 'Success',
        result: dataAll.length,
        data: dataAll,
    });
})

exports.deleteEducationProgram = catchAsync (async(req, res, next) => {
    const eduProgram = await EducationProgram.findById(req.params.id)
    await unlinkAsync(eduProgram.image.substring(1, eduProgram.image.length))

    if(!eduProgram) {
        return next(new AppError(`Program Edukasi tidak ditemukan!`, 404));
    } 

    await eduProgram.remove()
    res.json(
        {
            message: 'Program Edukasi berhasil dihapus',
            id: eduProgram
        }
    )
})