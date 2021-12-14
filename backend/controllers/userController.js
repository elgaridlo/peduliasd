const catchAsync = require('../utils/catchAsync');
const User = require('./../models/userModel')
const factory = require('./handlerController');

exports.getAll = catchAsync (async(req, res, next) => {
    const userAll = await User.find().populate('kid', 'fullname condition')

    res.status(200).json({
        status: 'Success',
        result: userAll.length,
        data: userAll,
    });
})

exports.getUserById = catchAsync (async(req, res, next) => {
    const user = await User.findById(req.params.id).populate({path: 'programEducation', populate: {path:'workshops'}})

    res.status(200).json({
        status: 'Success',
        data: user,
    });
})

exports.userUpdate = factory.updateOne(User)

