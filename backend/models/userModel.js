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
    race:{
        type: String,
    },
    lastEducation: {
        type: String
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
    auth: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Authentication',
        required: true
    },
    motherDetail: {
        name: {
            type: String
        },
        birthDate: {
            type: String
        },
        race: {
            type: String
        },
        lastEducation: {
            type: String
        },
        job: {
            type: String
        }
    },
    fatherDetail: {
        name: {
            type: String
        },
        birthDate: {
            type: String
        },
        race: {
            type: String
        },
        lastEducation: {
            type: String
        },
        job: {
            type: String
        }
    },
    kid: {
        name: {
            type: String
        },
        birthDate: {
            type: Date
        },
        condition: {
            type: String,
            enum: ['asd', 'non'],
            default: 'non',
        },
        level: {
            type: String,
            enum: ['0','1', '2', '3'],
            default: '0',
        },
        therapyPlace: {
            type: String,
        },
        firstTherapy: {
            type: Date,
        },
        description: {
            type: String,
        }
    }
}, {
    timestamps: true
})


const User = mongoose.model('User', userSchema)

module.exports = User