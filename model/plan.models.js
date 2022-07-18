
const mongoose = require('mongoose');

const Plans = new mongoose.Schema({
    planId: {
        type: String,
    },
    duration: {
        type: String,
    }, 
    price:{
        type: String,
    },
    device: {
        type: String,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
})

module.exports = mongoose.model('plan', Plans);