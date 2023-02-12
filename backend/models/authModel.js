const mongoose = require('mongoose')
// const crypto = require('crypto');

const validators = require('validator');
const bycrpt = require('bcryptjs');

const authSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true,
        lowercase: true,
        validate: [validators.default.isEmail, 'Please provide valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'A password must contain at least 8 character'],
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: [8, 'A password must contain at least 8 character'],
        validate: {
            validator: function(el) {
                // this only work when create new user save
                return el === this.password;
            },
            message: `The password aren't the same`,
        },
        select: false,
    },
    passwordChangedAt: Date,
    userdetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    role: {
        type: String,
        enum: ['member', 'admin'],
        default: 'member',
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpired: Date,
    active: {
        type: Boolean,
        default: true,
        select: false,
    }
}, {
    timestamps: true
})

authSchema.pre('save', async function(next) {
    // only run if the password is modified
    if (!this.isModified('password')) {
        return next();
    }
    // Hash the password cost of 12
    this.password = await bycrpt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

// instance method that can be available in all document collections in db server
authSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
) {
    return await bycrpt.compare(candidatePassword, userPassword);
};

authSchema.methods.changedPasswordAfter = async function(JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changesTimestamp = parseInt(
            this.passwordChangedAt.getTime() / 1000,
            10
        );
        return JWTTimestamp < changesTimestamp;
    }
    return false;
};

const Authentication = mongoose.model('Authentication', authSchema)

module.exports = Authentication