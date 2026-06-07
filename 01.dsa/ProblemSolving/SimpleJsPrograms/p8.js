//Javascript to Check if Two Numbers are Equal
let [num1,num2] = process.argv.slice(2);
num1 = Number(num1);
num2 = Number(num2);
if(num1 == num2){
    console.log("Number are equals.");
}else{
    console.log("Number are not equals.");
}
return;