const mongoose = require('mongoose')

const shopSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})


const Shop = mongoose.model('shop', shopSchema)

module.exports = Shop