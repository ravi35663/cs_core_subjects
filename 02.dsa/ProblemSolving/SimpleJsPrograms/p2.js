// Javascript to Check Whether a Given Number is Even or Odd
const arguments = process.argv;
const num = Number(arguments[2]);
if(num){ // if not a number, it will gives you NaN and it considered as false
    num % 2 === 0 ? console.log("Number is even"): console.log("Number is odd");
}else{
    console.log("Please enter number type");
}
// console.log("argv",num);