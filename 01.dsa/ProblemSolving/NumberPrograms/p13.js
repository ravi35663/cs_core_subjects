//Javascript Program to Reverse a Number and Check if it is a Palindrome
let num = Number(process.argv[2]);
let reverse_num = 0;
let temp_num = num;
while(num){
    let r = num % 10;
    reverse_num = 10 * reverse_num + r;
    num = Math.floor(num/10);
}
if(reverse_num == temp_num){
    console.log(`${temp_num} is a palindrome number`);
}else{
    console.log(`${temp_num} is not a palindrome number`);
}