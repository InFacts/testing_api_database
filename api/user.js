const db = require('../db')

const express = require('express');
const bodyParser = require('body-parser');
const userRouter = express.Router(mergeParams=true);

userRouter.use(bodyParser.json()); // support json encoded bodies
userRouter.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// ENDPOINTS
// GET  /users             READ all User objects

// GET /users
userRouter.get('/', (req, res, next) => {
    // Not REQUIRED: 
    db.query(`
        SELECT * FROM user;`, function (err, result, fields) 
    {
    if (err) throw err;
	    res.json(result);
    });
});

module.exports = userRouter;