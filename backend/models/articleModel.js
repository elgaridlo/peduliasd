const mongoose = require('mongoose')

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    poster: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    publish: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})


const Article = mongoose.model('article', articleSchema)

module.exports = Article