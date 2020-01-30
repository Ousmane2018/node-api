const productService = require('../service/productService');
const constants = require('../constants');
let response = {...constants.defaultServerResponse};
module.exports.createProduct = async(req, res) => { 
  try {
    JaabowolService =  await productService.createProduct(req.body);
    response.status = 200;
    response.message ='product created successfully';
    response.body = JaabowolService;

  } catch (error) {
   console.log('cadeele : Controller : createProduct', error);
   response.message = error.message;
     
  }
  res.status(response.status).send(response);
 }
