const cryptoService = require('../services/cryptoService');
const cryptoUtils = require('../utils/CryptoUtils'); 

exports.getCatalog = async (req, res) =>{

    const crypto = await cryptoService.allOffers().lean();
    res.render('catalog', {crypto});
}

exports.getDetails = async (req, res) =>{

    const crypto = await cryptoService.getACrypyto(req.params.id).lean()
    const isOwner = cryptoUtils.isOwner(crypto, req.user)
    const hasBought = crypto.buyers.includes(req.user._id);
    res.render('details', {crypto, isOwner, hasBought});
}

exports.getCreatePage = (req, res) =>{

    res.render('create');
}

exports.postCreatePage = async (req, res) =>{

    const {name, image, price, description, method} = req.body;
    const owner = req.user._id;
    const crypto = await cryptoService.createOffer({name, image, price, description, method, owner});
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
    res.render('edit', {crypto})
}

exports.postEditPage = async (req, res) =>{

    const crypto = await cryptoService.getACrypyto(req.params.id);
    const {name, image, price, description, method} = req.body;

    await cryptoService.editInfo(req.params.id, {name, image, price, description, method})

    res.redirect(`/catalog/${req.params.id}`)
}

exports.deletePage = async (req, res) =>{

   await cryptoService.delete(req.params.id)
   res.redirect('/catalog')
}