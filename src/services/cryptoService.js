const Crypto = require('../models/Crypto');

exports.createOffer = (data) => Crypto.create(data)