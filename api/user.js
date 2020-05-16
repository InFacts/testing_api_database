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

// POST /products
userRouter.post('/', function (req, res) {
    // REQUIRED: 
    //   tcorp_id (Unique), name, supplier_id, category_id
    //   MUST: child_products: []  EMPTY if none!
    var userInfo = req.body;
    console.log(userInfo);

    db.query(`INSERT INTO user (${Object.keys(userInfo).join()}) 
                        VALUES ?`, [[Object.values(userInfo)]], function (err, result, fields) {
        if (err) throw err;
            res.json(result);
            // if (userInfo !== undefined && userInfo.length !== 0) {
            // var values = userInfo.map(function (child) {
            //     return ([child.username, child.name, child.surname, child.is_active]);
            // });
            // db.query(`INSERT INTO user (username, name, surname, is_active) 
            //                 VALUES ?`, [values], function (err, result, fields) {
            //     if (err) throw err;
            //     res.json(result);
            // });
        }
)});


module.exports = userRouter;