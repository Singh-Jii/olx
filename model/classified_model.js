const mongo = require('mongoose');


const classify_schema = new mongo.Schema({


  my_nam: { 
    
    type: String, 
    
    required: true 
  
  
  },


  my_desc: { 
    
    type: String, 
    
    required: true 
  
  },


  my_catego: { 
    
    type: String, 
    
    
    enum: ['Clothing', 'Electronics', 'Furniture', 'All'], 
    
    
    required: true
  
  
  },
  my_img: { 
    
    type: String, 
    
    
    required: true 
  
  
  },


  my_loc: { 
    
    
    type: String, 
    
    required: true 
  
  
  },


  postedAt: { 
    
    type: Date, 
    
    
    default: Date.now 
  
  
  },


  my_rs: { 
    
    
    type: Number, 
    
    required: true 
  
  
  },



});


const Classify_model = mongo.model('Classified', classify_schema);


module.exports = Classify_model;
