const mongoose = require('mongoose');

const joke = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Name is required"],
		minlength: [3, "Name must be at least 3 characters long"],
    },

    punchline: {
        type: String,
        required: [true, "Name is required"],
		minlength: [3, "Name must be at least 3 characters long"],
    },
}, { timestamps: true });

module.exports = mongoose.model('joke', joke)