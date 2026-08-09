//Javascript Program to Reverse a Number
let num = Number(process.argv[2]);
let reverse_num = 0;
while(num){
    let r = num%10;;
    reverse_num = 10 * reverse_num + r;
    num = Math.floor(num/10);
}
console.log("Reversed number is : ",reverse_num);