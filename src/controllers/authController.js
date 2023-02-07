const User = require('../models/User');
const authService = require('../services/authService');

exports.getLoginPage = (req, res) =>{

    res.render('auth/login');
}

exports.postLoginPage = async (req, res) =>{

    const {email, password} = req.body;

    try {
        const token = await authService.login(email, password);
        res.cookie('auth', token, {httpOnly: true});
    }
    catch(err){
        
        return res.render('auth/login', {error: "Invalid username or password!"})
    }
    
    res.redirect('/');
}

exports.getRegisterPage = (req, res) =>{

    res.render('auth/register')
}

exports.postRegisterPage = async (req, res) =>{

    const {username, email, password, repass} = req.body;

    if(password !== repass){

        return res.render('auth/register', {error: "Passwords don`t match!"})
    }

    await authService.register({username, email, password})
    
    res.redirect('/');
}

exports.logoutPage = (req, res) =>{

    res.clearCookie('auth');
    res.redirect('/');
}