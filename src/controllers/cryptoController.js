const cryptoService = require('../services/cryptoService');
const cryptoUtils = require('../utils/CryptoUtils'); 

exports.getCatalog = async (req, res) =>{

    const crypto = await cryptoService.allOffers().lean();
    res.render('catalog', {crypto});
}

exports.getDetails = async (req, res) =>{

    const crypto = await cryptoService.getACrypyto(req.params.id).lean()
    if(req.user){
        const isOwner = cryptoUtils.isOwner(crypto, req.user)
        const hasBought = crypto.buyers.includes(req.user._id);
        return  res.render('details', {crypto, isOwner, hasBought});
    }
    res.render('details', {crypto});
}

exports.getCreatePage = (req, res) =>{

    res.render('create');
}

exports.postCreatePage = async (req, res) =>{

    const {name, image, price, description, method} = req.body;
    const owner = req.user._id;
    try {
       await cryptoService.createOffer({name, image, price, description, method, owner});
    }
    catch(err){
        const errors = Object.keys(err.errors).map(key=> err.errors[key].message)
        return res.render('create', {error: errors[0]})
    }
    res.redirect('/');
}

exports.buyPage = async (req, res) =>{

    const crypto = await cryptoService.getACrypyto(req.params.id);
    crypto.buyers.push(req.user._id);
    await crypto.save();
    res.redirect(`/catalog/${req.params.id}`)
}

exports.getEditPage = async (req, res) =>{
    const crypto = await cryptoService.getACrypyto(req.params.id).lean();
    const paymentMethod = cryptoUtils.getSelectedOption(crypto.method);
    res.render('edit', {crypto, paymentMethod})
}

exports.postEditPage = async (req, res) =>{

    const crypto = await cryptoService.getACrypyto(req.params.id).lean();
    const {name, image, price, description, method} = req.body;
    const paymentMethod = cryptoUtils.getSelectedOption(crypto.method);

    try {
        await cryptoService.editInfo(req.params.id, {name, image, price, description, method})
    }
    catch(err){
        const errors = Object.keys(err.errors).map(key=> err.errors[key].message)
        return res.render('edit', {crypto, paymentMethod, error: errors[0]});
    }

    res.redirect(`/catalog/${req.params.id}`)
}

exports.deletePage = async (req, res) =>{

   await cryptoService.delete(req.params.id)
   res.redirect('/catalog')
}
