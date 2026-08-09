//Javascript to Find Sum of Digits of a Number
let num = Number(process.argv[2]);
let sum = 0;
while(num){
    const r = num % 10; 
    sum +=r;
    num = Math.floor(num/10);
}
console.log("Sum of the digits is ",sum);