//Javascript to Find Sum of Natural Numbers using Recursion
let num = Number(process.argv[2]);
function sum(num){
    if(num==1){
        return 1;
    }
    return num + sum(num-1);
}

const num_sum = sum(num);
console.log(`Sum of first ${num} natural numbers is : ${num_sum}`);