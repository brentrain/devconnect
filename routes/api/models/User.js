const mongoose = require('mongoose');

const UserScehma = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        unique: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now 
    }
});

module.exports = User = mongoose.model('User', UserScehma);