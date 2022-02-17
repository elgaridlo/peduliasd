const mongoose = require('mongoose')

const assesmentSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    assesmentType: {
        type: String,
        enum: ['M-CHAT', 'other'],
        default: 'M-CHAT',
    },
    publish: {
        type: Boolean,
        default: false
    },
    assesment: [
        { 
            question: {
                type: String,
                required: true
            },
            multichoice: [
                {
                    answer: {
                        type: String,
                        required: true
                    },
                    score: {
                        type: String,
                        required: true
                    }
                }
            ]
        }
    ]
}, {
    timestamps: true
})


const Assesment = mongoose.model('assesment', assesmentSchema)

module.exports = Assesment