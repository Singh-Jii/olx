const exp = require('express');


const { body, my_param } = require('express-validator');

const my_route = exp.Router();


const classify_control = require('../control/classified_control');

const post_classify_validity = [


  body('my_nam').notEmpty().withMessage('Name cannot be empty'),

  body('my_desc').notEmpty().withMessage('Description cannot be empty'),
  
  body('my_catego').notEmpty().withMessage('Category cannot be empty'),
  body('my_img').notEmpty().withMessage('Image Link cannot be empty'),


  body('my_loc').notEmpty().withMessage('Location cannot be empty'),

  body('postedAt').optional().isISO8601().toDate().withMessage('Wrong date format'),

  body('my_rs').notEmpty().isNumeric().withMessage('Price must be a number'),


];

const chnge_classify_validity = [


  my_param('id').notEmpty().withMessage('ID cannot be empty'),

  ...post_classify_validity, 


];

my_route.get('/classified', classify_control.get_classify);


my_route.post('/classified', post_classify_validity, classify_control.post_classify);

my_route.put('/classified/:id', chnge_classify_validity, classify_control.chnge_classify);


my_route.delete('/classified/:id', my_param('id').notEmpty().withMessage('ID cannot be empty'), classify_control.del_classify);


module.exports = my_route;
