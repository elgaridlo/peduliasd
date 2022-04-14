const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true,
    },
    webLink: {
        type: String,
        required: true,
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


const Product = mongoose.model('product', productSchema)

module.exports = Product