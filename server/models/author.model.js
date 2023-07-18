const mongoose = require('mongoose')
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide author name!'],
        minlength: [3, 'Author name must be at least 3 characters!']
    }
}, {timestamps: true})
const Author = mongoose.model("Author", AuthorSchema)
module.exports = Author