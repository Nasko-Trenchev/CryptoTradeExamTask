const mongoose = require('mongoose');

const cryptoShema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength: 2
    },
    image: {
        type: String,
        required: true,
        match: /^https?:\/\//,
    },
    price: {
        type: Number,
        required: true,
        min: 1

    },
    description:{
        type: String,
        required: true,
        minLength: 10
    },
    method: {
        type: String,
        required: true,
        enum: ['crypto-wallet', 'credit-card', 'debit-card', 'paypal']
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