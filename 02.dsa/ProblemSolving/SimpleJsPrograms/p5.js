//Javascript to Find the Largest Number Among Three Numbers
const isANumber = require('./isANumber');
let [num1,num2,num3] = process.argv.slice(2);
num1 = isANumber(num1);
num2 = isANumber(num2);
num3 = isANumber(num3);
if(num1!==false && num2!==false && num3!==false){
    if(num1 > num2 && num1 > num3){
        console.log(`${num1} is greatest`);
    }else if (num2 > num3){
        console.log(`${num2} is greatest number`);
    }else{
        console.log(`${num3} is greatest number`);
    }
}else{
    console.log("Please enter valid numbers");
}