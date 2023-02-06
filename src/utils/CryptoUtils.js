

exports.getSelectedOption = (method) =>{

   const options = [
      {key: 'crypto-wallet', isSelected : false},
      {key: 'credit-card', isSelected : false},
      {key: 'debit-card', isSelected : false},
      {key: 'paypal', isSelected : false}
   ]

   const result = options.map(x=> x.key  === method? {...x, isSelected: true}: x)
   return result;
}


exports.isOwner = (crypto, user) =>{

   return  crypto.owner == user._id;
}