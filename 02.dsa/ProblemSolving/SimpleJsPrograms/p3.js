//Javascript to Find the Sum of Even and Odd Numbers in a number
const isANumber = require('./isANumber');
let num = isANumber();
if(num!=false){
    let evenSum = 0;
    let oddSum = 0;
    while(num){
        let reminder = num % 10;
        reminder % 2 === 0? evenSum += reminder:oddSum+=reminder
        num = Math.floor(num/10);
    }
    console.log("Sum of even numbers is : ",evenSum);
    console.log("Sum of odd numbers is : ",oddSum);
}else{
    console.log("Please enter a valid number");
}