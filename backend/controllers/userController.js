const Authentication = require('../models/authModel');
const appError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const User = require('./../models/userModel')
const factory = require('./handlerController');

exports.getAll = catchAsync (async(req, res, next) => {
    const authAll = await Authentication.find()
    const userAll = await User.find()

    for (let item of userAll ) {
        for (let x of authAll) {
            if (item._id.toString() === x.userdetail.toString()) {
                await User.findByIdAndUpdate(item._id, {auth: x._id})
            }
        }
    }

    // userAll.map(async(item) => {
    //     for (let x of authAll) {
    //         if (item._id === x.userdetail) {
    //             await User.findByIdAndUpdate(item._id, {auth: x._id})
    //         }        
    //     }
    // })

    res.status(200).json({
        status: 'Success',
        result: authAll.length,
        data: authAll,
    });
})

exports.getProducts = catchAsync(async (req, res, next) => {
    const pageSize = 2
    const page = Number(req.query.pageNumber) || 1

    const keyword = req.query.query ?  {
        fullname : {
            $regex: req.query.query
        }
    } : {}


    const count = await User.countDocuments({...keyword}).exec()
    const users = await User.find({ ...keyword }).populate({path: 'auth'}).limit(pageSize).skip(pageSize * (page-1)).exec()


    const result = [...users]

    const finish = await result.filter(item => item.auth.role === 'member')

    res.json({users: finish, currentPage: page, totalPages: Math.ceil(count / pageSize)})
})

exports.getUserById = catchAsync (async(req, res, next) => {
    const user = await User.findById(req.params.id).populate({path: 'programEducation', populate: {path:'workshops'}}).populate('auth')

    res.status(200).json({
        status: 'Success',
        data: user
    });
})

exports.userUpdate = catchAsync (async(req, res, next) => {
    if (req.params.id !== req.user.id && req.user.role === 'member') {
        return next(
            new appError(
              'Anda dilarang mengubah data selain id Anda',
              400
            )
        );
    }

    const update = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        status: 'Success',
        data: update,
    });
})

exports.updateProperty = catchAsync (async(req, res, next) => {
    const data = await User.updateMany({kid: {
        name: '',
        birthDate: new Date(),
        condition: '',
        level: '',
        therapyPlace: '',
        firstTherapy: new Date(),
        description: ''
    }} )

    res.status(200).json({
        status: 'berhasil',
        data
    })
})