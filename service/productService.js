const Product = require('../database/models/productModel');
const {formatMongoData, checkObjectId} = require ('../helper/dbHelper');
const constants = require('../constants');
const mongoose = require('mongoose');



module.exports.createProduct = async (serviceData) => {
try {
  let product = new Product({ ...serviceData});
  let result = await product.save(); 
  console.log('====',result);

  return  formatMongoData(result);
  
} catch (error) {
  console.log('cadeele : service : createProduct', error);
   throw new Error(error);
}
}

module.exports.getAllProducts = async ({skip=0,limit=10}) => {
  try {
    let result = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit)); 
    console.log('====',result);
  
    return formatMongoData(result); /* toObject can only be applied to a single document*/
    
  } catch (error) {
    console.log('cadeele : service : getAllproducts', error);
     throw new Error(error);
  }
  }

  module.exports.getProductById = async ({ id }) => {
    
    try {

      checkObjectId(id);
      let lineage = await Product.findById(id); 
     
      if(!lineage) {
        throw new Error(constants.productMessage.PRODUCT_NOT_FOUND);
       
      }
    
      return formatMongoData(lineage); /* toObject can only be applied to a single document*/
      
    } catch (error) {
      console.log('cadeele : service : getProductById', error);
       throw new Error(error);
      
    }
    }