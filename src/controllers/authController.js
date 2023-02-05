const User = require('../models/User');

exports.getLoginPage = (req, res) =>{

    res.render('login');
}

exports.postLoginPage = (req, res) =>{

    res.redirect('/');
}

exports.getRegisterPage = (req, res) =>{

    res.render('register')
}

exports.postRegisterPage = (req, res) =>{

    const {name, email, password, repass} = req.body;

    if(password !== repass){

        throw "Passwords don`t match";
    }
    
    res.redirect('/');
}