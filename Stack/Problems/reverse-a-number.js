/*
Reverse a number using stack
Given a number , write a program to reverse this number using stack.

Input Format
In the function an integer is passed

Output Format
Return an integer:
    Sample Input:
    456
    Sample Output:
    654
*/

function reverse(n){
    let stack = [];
    while(n){
        stack.push(n%10);
        n = Math.floor(n/10);
    }
    let reverse = 0;
    stack.forEach((item,i)=>{
        reverse = 10*reverse + item;    
    });
    return reverse;
}
const n = 456;
console.log("Reversed number is:", reverse(n));