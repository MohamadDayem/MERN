const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String,
        required : [true, "Lastname must be requerd"]
    },
    email: {
        type: Number,
        required : [true, "Email must be requerd"]
    },
    address :{
        type : String,
        required 
    }
} , {timestamps:true} );

const User = mongoose.model('User', UserSchema);

module.exports = User