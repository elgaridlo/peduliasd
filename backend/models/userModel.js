const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    fullname: {
        type: String,
        required:true,
        lowercase: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    placeBirth: {
        type: String,
    },
    dateBirth: {
        type: String,
    },
    programEducation: [
        {
            workshops: {
                type: mongoose.Schema.Types.ObjectId,
                ref:'Workshop'
            },
            join: {
                type: Boolean,
                default: false
            }
        }
    ], 
    kid: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Kid'
    }]
}, {
    timestamps: true
})


const User = mongoose.model('User', userSchema)

module.exports = User