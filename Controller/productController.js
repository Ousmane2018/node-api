const productService = require('../service/productService');
const constants = require('../constants');
let response = {...constants.defaultServerResponse};
module.exports.createProduct = async(req, res) => { 
  try {
    JaabowolService =  await productService.createProduct(req.body);
    response.status = 200;
    response.message =constants.productMessage.PRODUCT_CREATED;
    response.body = responseFromService;

  } catch (error) {
   console.log('cadeele : Controller : createProduct', error);
   response.message = error.message;
     
  }
  res.status(response.status).send(response);
 }
 /*********************request byID****** */

 module.exports.getAllProducts = async(req, res) => { 
  try {
    JaabowolService =  await productService.getAllProducts(req.query);
    response.status = 200;
    response.message =constants.productMessage.PRODUCT_FETCHED;
    response.body = JaabowolService;

  } catch (error) {
   console.log('cadeele : Controller : getAllProducts', error);
   response.message = error.message;
     
  }
  res.status(response.status).send(response);
 }
/********************** request params ***************** */

module.exports.getProductById = async(req, res) => { 
  try {
    JaabowolService =  await productService.getProductById(req.params);
    response.status = 200;
    response.message =constants.productMessage.PRODUCT_FETCHED;
    response.body = JaabowolService;

  } catch (error) {
   console.log('cadeele : Controller : getProductById', error);
   response.message = error.message;
     
  }
  res.status(response.status).send(response);
 }
