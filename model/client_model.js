const mongo = require('mongoose');


const bc = require('bcrypt');

const client_schema = new mongo.Schema({


  my_mail: { 
    
    type: String, 
    
    required: true, 
    
    unique: true 
  
  
  },

  my_pswrd: { 
    
    type: String, 
    
    required: true 
  
  
  },


});

client_schema.pre('save', async function (next) {


  try {


    const my_slting = await bc.genSalt(10);

    const my_hshing = await bc.hash(this.my_pswrd, my_slting);


    this.my_pswrd = my_hshing;

    next();


  } 
  
  
  catch (er) {


    next(er);


  }


});


const Client = mongo.model('User', client_schema);


module.exports = Client;
