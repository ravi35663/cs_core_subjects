//Javascript to Swap Two Numbers

// Method - 1 (Swap without using 3rd variable);
let [num1,num2] = process.argv.slice(2);
num1 = Number(num1);
num2 = Number(num2);
console.log(`Original Values: num1 = ${num1} and num2 = ${num2}`);
// num1 = num1+num2;
// num2 = num1-num2;
// num1 = num1 - num2;

// Method - 2 (Using javascript feature)
// [num1,num2] = [num2,num1]

// Method - 3 (Using 3rd variable)
let temp = num1;
num1 = num2;
num2 = temp;
console.log(`Swapped Values: num1 = ${num1} and num2 = ${num2}`);