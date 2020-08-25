const config = require('config');
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
router.use(express.json());

console.log('Connecting To Aurora');
var pool = mysql.createPool({
    connectionLimit : 10,
    host     : config.get('url'),
    user     : config.get('user'),
    password : config.get('password'),
    database : config.get('database')
});

//Empty object
var creditResponse = 
  {
    customerId: 0,
    lastFourSSN: '0',
    description: '0',
    experianCreditScore: '0',
    transUnionCreditScore: '0',
    equifaxCreditScore: '0'
  }
//Express router for GET with customerId
router.get('/:customerid', (req,res) => {
    console.log('In credit-api GET');
    console.log('Customer Identifier is: ' + req.params.customerid);
    console.log('Running Aurora Query');
    pool.query('SELECT * FROM credit.ratingsAgencies WHERE customerId=?', [req.params.customerid], function (error, results, fields) {
        if (error) throw error;

        //Populating response object from SQL Query to Aurora
        creditResponse = {
          customerId: results[0].id,
          lastFourSSN: results[0].customerId,
          description: results[0].description,
          experianCreditScore: results[0].experianCreditScore,
          transUnionCreditScore: results[0].transunionCreditScore,
          equifaxCreditScore: results[0].equifaxCreditScore
        }
        
        res.status(200).send(creditResponse);
       
        
      
      });

    

    
});


module.exports = router;