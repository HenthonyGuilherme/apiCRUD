const mongoose = require('../db/db')

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
    type: String,
    required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Posts = mongoose.model('Cadastro', PostSchema)

module.exports = Posts