const mongoose = require('mongoose');

const cryptoShema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    method: {
        type: String,
        required: true,
    },
    buyers: {
        type: [String],
        ref : 'User'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref : 'User'    
    }
})

const Crypto = mongoose.model('Crypto', cryptoShema);

module.exports = Crypto;