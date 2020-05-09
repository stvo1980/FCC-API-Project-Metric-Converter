/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  
  
  
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
    console.log("igetUnit", convertHandler.getUnit(input)) 

    var regexFilter = /^(mi|gls|km|L|gal|kg)$/i
    var test = regexFilter.test(initUnit);
  //  console.log("test", test)
    if(!test) {
      res.json({error:"invalid unit"})
    }
    
    
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

   res.json({
        initNum:initNum, 
        initUnit: initUnit,
        returnNum: returnNum,
        returnUnit: returnUnit,
        string: toString
      })
    });
    
};
