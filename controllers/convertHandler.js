/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function(input) {
   var resultNum;
    var regex = /^[0-9]*(.)*[^a-z]/i;
var resultNum = input.match(regex);
    resultNum = resultNum[0];
// console.log("inputmatchnumber", resultNum[0]);
   
    
    // var regex = /^\d*(\.|\/)?\d*/g;
    //  var regex = /^\d*[^a-z]*/
  //  var resultNum = input.match(regex);
    //  resultNum = resultNum[0];
 //    console.log('result input[]', input, 'end')

  //  resultNum = eval(resultNum[0]);

    //     console.log('result inputfinal', resultNum, 'end')
    return resultNum;
  };

  this.getUnit = function(input) {
    var regex = /[a-z]/gi;

    var resultUnit = input.match(regex);
    resultUnit = resultUnit.join("");
        console.log("result inputUnit", resultUnit, "end");

    return resultUnit;
  };

  this.getReturnUnit = function(initUnit) {
    var resultReturnUnit;
    if (initUnit == "mi" || initUnit == "MI") {
      resultReturnUnit = "km";
    } else if (initUnit == "km" || initUnit == "KM") {
      resultReturnUnit = "mi";
    } else if (initUnit == "L" || initUnit == "l") {
      resultReturnUnit = "gal";
    } else if (initUnit == "gal" ||initUnit == "GAL") {
      resultReturnUnit = "L";
    } else if (initUnit == "kg" ||initUnit == "KG") {
      resultReturnUnit = "lbs";
    } else if (initUnit == "lbs" || initUnit == "LBS") {
      resultReturnUnit = "kg";
    }
    return resultReturnUnit;
  };

  this.spellOutUnit = function(unit) {
    var resultSpellout;
    if (unit == "kg" ||unit == "KG") {
      resultSpellout = "kilograms";
    } else if (unit == "km" || unit == "KM") {
      resultSpellout = "kilometers";
    } else if (unit == "L" || unit == "l") {
      resultSpellout = "Litters";
    } else if (unit == "lbs" || unit == "LBS") {
      resultSpellout = "pounds";
    } else if (unit == "mi" || unit == "MI") {
      resultSpellout = "miles";
    } else if (unit == "gal" || unit == "GAL") {
      resultSpellout = "gallons";
    }
    // console.log("resultSpellout", resultSpellout,unit);

    return resultSpellout;
  };

  this.convert = function(initNum, initUnit) {
  //  initNum = Number(initNum);
    var calc = eval(initNum)
//    console.log('initNum', initNum)
 //   console.log('calc', calc)

    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var resultConvert;

    if (initUnit == "mi" || initUnit == "MI" ) {
      resultConvert = calc * miToKm;
    } else if (initUnit == "km" || initUnit == "KM") {
      resultConvert = calc / miToKm;
    } else if (initUnit == "L" || initUnit == "l") {
      resultConvert = calc / galToL;
    } else if (initUnit == "gal" || initUnit == "GAL") {
      resultConvert = calc * galToL;
    } else if (initUnit == "kg" || initUnit == "KG") {
      resultConvert = calc * lbsToKg;
    } else if (initUnit == "lbs" || initUnit == "LBS") {
      resultConvert = calc * lbsToKg;
    }
    //    else
    //      console.log("error")
    //    resultConvert = undefined;

    //  console.log(
    //    "initNum convert",
    //   initNum,
    //   "initUnit",
    //   initUnit,
    //   "converted",
    //    resultConvert
    //  );
    resultConvert = resultConvert.toFixed(3);
    //   console.log('resultConvert', resultConvert)
    return resultConvert;
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var resultString;
    resultString =
      initNum +
      " " +
      this.spellOutUnit(initUnit) +
      " converts to " +
      returnNum +
      " " +
      this.spellOutUnit(returnUnit);

    //   console.log('resultString', resultString);
    return resultString;
  };
}

module.exports = ConvertHandler;
