const config = require('../config');
const jwt = require('../lib/jsonWebToken');
const User = require('../models/User');

exports.getUserById = (id) => User.findById(id);

exports.getUserByEmail = (email) => User.findOne({email});

exports.createUser = (data) => User.create(data);

exports.login = async (email, password) => {

    const user = await this.getUserByEmail(email);

    const isValid = user.validatePassword(password);

    if(!user || !isValid){

        throw "Username or passsword don`t match!"
    }

    const payload = {_id: user._id, username : user.username, email: user.email}
    const token = await jwt.sign(payload, config.SECRET, {expiresIn: '2h'})

    return token;
}