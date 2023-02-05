

exports.isOwner = (crypto, user) =>{

   return  crypto._id == user._id;
}