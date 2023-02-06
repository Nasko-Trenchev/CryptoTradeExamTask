const Crypto = require('../models/Crypto');

exports.createOffer = (data) => Crypto.create(data);

exports.allOffers = () => Crypto.find();

exports.getACrypyto = (id) => Crypto.findById(id);

exports.editInfo = (id, data) => Crypto.findByIdAndUpdate(id, data)

exports.delete = (id) => Crypto.findByIdAndDelete(id);

exports.filterByPaymentMethod = (method) => Crypto.find({method: method})
