const Joi = require('@hapi/joi');
const constants = require('../constants');

const validateObjectSchema = (data, schema)=>{
    const result = schema.validate(data, {convert: false});
    if(result.error){
        const errdet = result.error.details[0];
        return {
            message: errdet.message,
            path: errdet.path
        }
    }

    return null;
}

   

/*
 * *** Validate request body data 
*/
module.exports.validateBody = (schema)=>{
    return (req, res, next)=>{
        let response = {...constants.defaultServerResponse};
        const error = validateObjectSchema(req.body, schema);
        if(error){
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }

        return next();
    }
}

/*
 * *** Validate request Query Params
*/
module.exports.validateQueryParams = (schema)=>{
    return (req, res, next)=>{
        let response = {...constants.defaultServerResponse};
        const error = validateObjectSchema(req.query, schema);
        if(error){
            response.body = error;
            response.message = constants.requestValidationMessage.BAD_REQUEST;
            return res.status(response.status).send(response);
        }

        return next();
    }
}