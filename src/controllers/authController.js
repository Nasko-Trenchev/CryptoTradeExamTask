const User = require('../models/User');
const authService = require('../services/authService');

exports.getLoginPage = (req, res) =>{

    res.render('auth/login');
}

exports.postLoginPage = async (req, res) =>{

    const {email, password} = req.body;

    const token = await authService.login(email, password);
    res.cookie('auth', token, {httpOnly: true});
    res.redirect('/');
}

exports.getRegisterPage = (req, res) =>{

    res.render('auth/register')
}

exports.postRegisterPage = async (req, res) =>{

    const {username, email, password, repass} = req.body;

    if(password !== repass){

        throw "Passwords don`t match";
    }

    await authService.register({username, email, password})
    
    res.redirect('/');
}

exports.logoutPage = (req, res) =>{

    res.clearCookie('auth');
    res.redirect('/');
}