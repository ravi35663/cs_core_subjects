// Javascript to Check Whether a Number is Positive or Negative
const num = require('./isANumber')();
if(num){
    num < 0 ? console.log("Negative number"): console.log("Positive number");
}else{
    console.log("Please enter a valid number.");
}