const mongoose = require('mongoose');

const pro = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        minlength: [3, "title must be at least 3 characters long"],
},

price: {
    type: String,
    required: [true, "price required"],

},

description: {
    type: String,
    required: [true, "description required"],
    minlength: [3, "description must be at least 3 characters long"],
}}, { timestamps: true });

module.exports = mongoose.model('pro', pro)
