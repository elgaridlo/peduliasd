const mongoose = require('mongoose')

const kidSchema = mongoose.Schema({
    fullname: {
        type: String,
        required:true,
        lowercase: true
    },
    placeBirth: {
        type: String,
        required: true,
    },
    dateBirth: {
        type: String,
        required: true,
    },
    conditions: {
        type: String,
        enum: ['asd', 'non'],
        default: 'non',
        required: true,
    },
    levelasd: {
        type: String,
        enum: ['1', '2','3'],
        default: '1',
    }
}, {
    timestamps: true
})


const Kid = mongoose.model('Kid', kidSchema)

module.exports = Kid