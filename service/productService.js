const Product = require('../database/models/productModel');
module.exports.createProduct = async (serviceData) => {
try {
  let product = new Product({ ...serviceData});
  let result = await product.save(); 
  console.log('====',result);

  return result.toObject();
  
} catch (error) {
  console.log('cadeele : service : createProduct', error);
   throw new Error(error);
}


}