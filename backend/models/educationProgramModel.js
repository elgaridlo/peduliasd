const mongoose = require('mongoose')

const educationProgramSchema = mongoose.Schema({
    workshopType: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Workshop'
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
})


const WorkShop = mongoose.model('education_program', educationProgramSchema)

module.exports = WorkShop