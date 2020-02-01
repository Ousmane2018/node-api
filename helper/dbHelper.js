const constants = require('../constants');
const mongoose = require('mongoose');


let newList=[];
module.exports.formatMongoData = (data) => {
  if(Array.isArray(data)){
   
for(value of data){
  
  newList.push(value.toObject());
}
  }
   return newList;
}

module.exports.checkObjectId = (id) => {
  if(!(mongoose.Types.ObjectId.isValid(id))){

    throw new Error(constants.databaseMessage.INVALID_ID);

  }
}