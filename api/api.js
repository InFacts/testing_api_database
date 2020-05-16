// Required Imports
const express   = require('express');
const bodyParser = require('body-parser');
const apiRouter = express.Router(mergeParams=true);

// All the child routers defined
const usersRouter = require('./user.js');

apiRouter.get('/', (req, res) => {
    res.send({
      message: 'Hello from the API',
    });
  });

apiRouter.use('/users', usersRouter);

module.exports = apiRouter;
