
const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    plans: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'plan'
    }
})

module.exports = mongoose.model('user', User);