const mongoose = require('mongoose')

const workshopSchema = mongoose.Schema({
    workshopType: {
        type: String,
        enum: {
            values: ['workshopClass', 'virtualClass', 'zoominarClass'],
            message: '{VALUE} is not supported'
        },
        required: true
        // default: 'workshopClass',
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    pdfLink: {
        type: String, 
    }
}, {
    timestamps: true
})


const WorkShop = mongoose.model('Workshop', workshopSchema)

module.exports = WorkShop