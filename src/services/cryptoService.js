const Crypto = require('../models/Crypto');

exports.createOffer = (data) => Crypto.create(data);

exports.allOffers = () => Crypto.find();

exports.getACrypyto = (id) => Crypto.findById(id);