const exp = require('express');

const mongo = require('mongoose');

const bp = require('body-parser');

const my_cor = require('cors');

const my_env = require('dotenv');

my_env.config();

const application = exp();

const my_port = process.env.my_port || 3000;

application.use(my_cor());

application.use(bp.json());

mongo.connect(process.env.mongo_link, { 
  
  useNewUrlParser: true, 
  
  useUnifiedTopology: true 

});

mongo.connection.on('er', (er) => {

  console.log(`${er}`);

  process.exit(-1);

});

const auth_route = require('./route/auth_route');

const classify_route = require('./route/classified_route');

application.use('/api/auth', auth_route);

application.use('/api', classify_route);

application.listen(my_port, () => {

  console.log(`${my_port}`);
  
});
