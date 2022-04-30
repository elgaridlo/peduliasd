const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

const Auth = require('../models/authModel')
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const WorkShop = require('../models/workshopModel');
const Authentication = require('../models/authModel');
const factory = require('./handlerController');

const signToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
    });
};

const updateWorkshop = async(user) => {
    const workshopData = (await WorkShop.find())
    const userDetail = await User.findById(user.userdetail)

    let programEducationSave = []
    let idProgramEdu = []
    // validasi kalau belum ada data workshops
    if(!userDetail.programEducation || !userDetail.programEducation.length ) {
        for(let item of workshopData) {
            // console.log('workshopData = ', item)
            programEducationSave.push({workshops: item._id, join: false})
        }
        await User.findByIdAndUpdate(user.userdetail, {programEducation: programEducationSave})
    } 
    // workshop data tidak sama dengan db
    else if( userDetail.programEducation.length < workshopData.length) {
        // sampai sini tolong dikerjakan
        for (let item of userDetail.programEducation) {
            idProgramEdu.push(item.workshops.toString())
            programEducationSave.push({workshops: item.workshops, join: item.join})
        }
        for(let item of workshopData) {
            if(!idProgramEdu.includes(item._id.toString())) {
                programEducationSave.push({workshops: item._id, join: false})
            }
        }
        await User.findByIdAndUpdate(user.userdetail, {programEducation: programEducationSave})
    }
}

const createSendToken = async(user, statusCode, res) => {
    const token = signToken(user._id);

    const cookieOptions = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIES_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true, // set to true, so the cookie can't be modified or changes in anyway in the browser
    };

    // the cookie will send encrypted to the client
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;

    await updateWorkshop(user)
    res.cookie('jwt', token, cookieOptions);

    user.password = undefined;

    res.status(statusCode).json({
        status: 'Success',
        token,
        user
    });
};

const signup = catchAsync(async (req, res, next) => {
    const {userdetail, email, password, passwordConfirm} = req.body
    if (!userdetail.fullname || !userdetail.phone) {
        return next(new AppError('Please provide fullname and phone number', 400))
    }

    // 1) Check if email and password exists
    if (!email || !password) {
        console.log('email kosong')
        return next(new AppError('Please provide email and password', 400));
    }

    const checkuser = await Auth.findOne({email})
    if(checkuser){
        return next(new AppError('Email already exist! Please provide an other email', 400));
    } 

    // if(email.length < 8) return next(new AppError('Username must contain at least 8 character', 400));
    if(password.length < 8) return next(new AppError('A password must contain at least 8 character', 400));
    if(password !== passwordConfirm) return next(new AppError(`The password aren't the same`, 400));

    const newUser = await Auth.create({
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        userdetail: (await User.create({
            fullname: req.body.userdetail.fullname,
            phone: req.body.userdetail.phone,
            address: req.body.userdetail.address
        }))._id
    });

    createSendToken(newUser, 201, res);
});

const login = catchAsync(async (req, res, next) => {
    const { email, password } = req.body;

    // 1) Check if email and password exists
    if (!email || !password) {
        return next(new AppError('Please provide email and password', 400));
    }
    // 2) Check if email and password is correct
    const user = await Auth.findOne({ email }).select('+password')
    if (!user || !(await user.correctPassword(password, user.password))) {
        // 401 means unauthorize
        return next(new AppError('Incorrect email or password!', 401));
    }

    // 3) If everything ok, send the token back to the client
    createSendToken(user, 200, res);
});

const logout = (req, res) => {
    res.cookie('jwt', 'loggedout', {
        expires: new Date(Date.now() + 10 * 1000),
        httpOnly: true
    })
    res.status(200).json({ status: 'success' })
}

const protect = catchAsync(async (req, res, next) => {
    let token;
    // 1) Gettitng token and check if its there
    
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }
    
    // 2 ) Verification token
    if (!token) {
        return next(
            new AppError('You are not logged in ! Please login to get access.', 401)
        );
    }
    // Build in promisify node, it is the same as await. It is es6 destructuring
    // jwt.verify is the function that we want to call, and after that is the param that we want to pass
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    console.log('decoded = ', decoded)
    // 3 ) Check if user still exists
    const currentUser = await Authentication.findById(decoded.id);

    console.log('currentUser pertama = ', currentUser)

    if (!currentUser) {
        return next(
            new AppError(
                'The User belonging to this token does no longier exist.',
                401
            )
        );
    }

    console.log('currentUser kedua = ', currentUser)

    // 4 ) Check if user changed password after the token was issued
    // console.log(currentUser.changedPasswordAfter(decoded.iat));
    if (await currentUser.changedPasswordAfter(decoded.iat)) {
        return next(
            new AppError('User recently changed password! Please log in again', 404)
        );
    }

    console.log('currentUser ketiga = ', currentUser)
    // Send the user to the other middleware only req that could accessed by the other middleware
    req.user = currentUser;
    // GRANT ACCESS TO THE PROTECTED ROUTE
    next();
});

const updatePassword = catchAsync(async (req, res, next) => {
    const { password, updatePassword, passwordConfirm } = req.body;
    
    // Get user from the collection
    const user = await Authentication.findById(req.user.id).select('+password');
  
    // Check user password is correct
  
    if (!(await user.correctPassword(password, user.password))) {
      return next(new AppError('Your current password is wrong.', 401));
    }
    // If the password is correct then update
    user.password = updatePassword;
    user.passwordConfirm = passwordConfirm;
    await user.save();
    // Log user in, send JWT
    createSendToken(user, 201, res);
  });

  const updatePasswordById = catchAsync(async (req, res, next) => {
    const { updatePassword, passwordConfirm } = req.body;
    const { id } = req.params 
    
    // Get user from the collection
    const user = await Authentication.find({userdetail: id}).select('+password');
    const member = await Authentication.findById(user[0]._id).select('+password');
    
    if (!member) {
        return next(new AppError('User is not found', 401));
    }
    
    if (req.user.role !== 'admin') {
        return next(new AppError('You are not an admin!', 401));
    }

    // Check user password is correct
    // if (!(await member.correctPassword(password, member.password))) {
    //   return next(new AppError('Your current password is wrong.', 401));
    // }

    // If the password is correct then update
    member.password = updatePassword;
    member.passwordConfirm = passwordConfirm;
    await member.save();
    // Log user in, send JWT
    createSendToken(member, 201, res);
  });


// Only renders pages and will be no errors!
const isLoggedIn = async (req, res, next) => {
    try {
        if (req.cookies.jwt) {
            // 1) verify token
            const decoded = await promisify(jwt.verify)(req.cookies.jwt, process.env.JWT_SECRET);
            const currentUser = await User.findById(decoded.id);

            // 2) check if user still exists
            if (!currentUser) {
                return next();
            }

            // 3) check if user changed password after issues
            if (await currentUser.changedPasswordAfter(decoded.iat)) {
                return next();
            }

            // There is logged in user
            res.locals.user = currentUser;
            return next();
        }
    } catch (error) {
        return next();
    }
    next();
};

const getAuthById = catchAsync (async(req, res, next) => {
    const user = await Authentication.find({userdetail: req.params.id})

    res.status(200).json({
        status: 'Success',
        data: {...user},
    });
})

const restrictTo = (...roles) => (req, res, next) => {
    // roles['admin', 'lead-guide']. role='user'
    console.log('admin ? = ', req.user.role);
    if (!roles.includes(req.user.role)) {
      return next(
        // 403 means forbidden
        new AppError('You do not have permission to perform this action', 403)
      );
    }
    next();
  };

module.exports = {signup, login, isLoggedIn, protect, logout, restrictTo, updatePassword, updatePasswordById, getAuthById}