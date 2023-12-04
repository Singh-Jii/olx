const jot = require('jsonwebtoken');


const my_conc = require('../config');


exports.check_token = (request, response, next) => {


  const token = request.header('Authorization');

  if (!token) {

    return response.status(401).json({ msg: 'token not found' });


  }
  

  try {


    const my_dt = jot.verify(token, my_conc.secret_key);

    request.client = my_dt;

    next();


  } 
  
  catch (er) {


    console.log(er);

    return response.status(401).json({ msg: 'token is invalid' });


  }


};
