const mongoose = require('mongoose');

const auther = new mongoose.Schema({
name: {
        type: String,
        required: [true, "title is required"],
        minlength: [2, "title must be at least 3 characters long"],

}}, { timestamps: true });

module.exports = mongoose.model('auther', auther)
