//Javascript Program to Reverse a Number using Recursion
let num = Number(process.argv[2]);
function reverseNumber(num,sum){
    if(num == 0){
        return sum;
    }
    let last_num = num % 10;
    sum = 10 * sum + last_num
    return reverseNumber(Math.floor(num/10),sum);

}

const reverse_num = reverseNumber(num,0);
console.log("Reverse Number is : ",reverse_num);
// Way 2:-  you can convert them into string and add one character at a time