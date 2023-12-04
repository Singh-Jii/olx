const exp = require('express');


const { body } = require('express-validator');

const my_route = exp.Router();


const authen_control = require('../control/auth_control');

const signup_validity = [


  body('my_mail').isEmail().withMessage('wrong email format'),


  body('my_pswrd').isLength({ min: 6 }).withMessage('Password should have at least 8 characters'),


];

my_route.post('/signup', signup_validity, authen_control.signup);

const login_validity = [


  body('my_mail').isEmail().withMessage('wrong email format'),

  body('my_pswrd').notEmpty().withMessage('Password cannot be empty'),


];

my_route.post('/login', login_validity, authen_control.login);


module.exports = my_route;
