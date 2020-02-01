const mongoose = require('mongoose');
const productschema = mongoose.Schema({
  name :String,
  brand:String,
  price:Number
  

},{
  timestamps:true,
  toObject: {
    transform: function(doc, ret, options){
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret ;
    }
  }
})

module.exports = mongoose.model('product', productschema)