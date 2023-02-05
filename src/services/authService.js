const User = require('../models/User');

exports.getUser = (id) => User.findById(id);

exports.createUser = (data) => User.create(data);