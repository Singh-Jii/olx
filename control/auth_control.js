const Client = require('../model/client_model');

const bc = require('bcrypt');

const jot = require('jsonwebtoken');

const my_conc = require('../config');

exports.signup = async (request, response) => {


  try {

    const { my_mail, my_pswrd } = request.body;

    const available_client = await Client.findOne({ my_mail });


    if (available_client) {

      return response.status(409).json({ msg: 'this mail already used' });


    }

    const my_hshing = await bc.hash(my_pswrd, 12);

    const new_client = new Client({my_mail,my_pswrd: my_hshing,});


    await new_client.save();

    response.status(201).json({ msg: 'Signup completed' });


  } 
  
  catch (er) {

    console.log(er);


    response.status(500).json({ msg: 'Error' });

  }


};


exports.login = async (request, response) => {


  try {

    const { my_mail, my_pswrd } = request.body;

    const client = await Client.findOne({ my_mail });


    if (!client) {

      return response.status(401).json({ msg: 'wrong credentials' });

    }

    const check_pswrd = await bc.compare(my_pswrd, client.my_pswrd);


    if (!check_pswrd) {


      return response.status(401).json({ msg: 'wrong credentials' });

    }

    const token = jot.sign({ client_id: client._id, my_mail: client.my_mail }, my_conc.secret_key, { expiresIn: '2h' });

    response.status(200).json({ msg: 'Login completed', token });


  } 
  
  
  catch (er) {


    console.log(er);


    response.status(500).json({ msg: 'Error' });


  }

  
};
