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
    descrtiption:{
        type: String,
        required: true,
    },
    paymentMethod: {
        type: String,
        required: true,
    },
    buyCrypto: {
        type: mongoose.Types.Array,
        ref : 'User'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref : 'User'    
    }
})

const Crypto = mongoose.model('Crypto', cryptoShema);

module.exports = Crypto;