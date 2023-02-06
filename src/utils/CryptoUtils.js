

exports.isOwner = (crypto, user) =>{

   return  crypto.owner == user._id;
}