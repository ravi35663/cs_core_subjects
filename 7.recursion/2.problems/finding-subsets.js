/*
==> Subset Sum
    Given a set of non-negative integers, and a value sum, determine if there is a subset of the given 
    set with sum equal to given sum. Also count the number of sub arrays.

    Input
    arr = [10, 12, 15, 6, 19, 4,1]
    sum = 16

    Output
    Yes

*/

// T.C: O(2^n) and S.C: O(n)
// Way - 1 (Without recursion): (Brute-force)
function subSetSum(arr,target){
    let output = [[]];
    let count = 0;
    arr.forEach(item=>{
        if(item <= target){
            let temp = [];
            // Calculate the output sum
            for(let i=0;i<output.length;i++){
                const k = [...output[i],item];
                temp.push(k);
                const sum = arraySum(k);
                if(sum == target){
                    count++;
                }
            }
            output = [...output,...temp];
        }
    });
    return count;
}

const arraySum = (arr)=>{
    let sum = 0;
    arr.forEach(item=>{
        sum +=item;
    });
    return sum;
}

// const arr = [10, 12, 15, 6, 15, 4,1];
// const sum = 16;

// console.log("Sub-Arrays whose sum is: ",sum," is ",subSetSum(arr,sum));
// With Recursion (Way 2): You can make recursion of above program: (This is not optimized solution)

// T.C: O(2^n) and S.C: O(n): Dry run this program
function subSetSumRecursion(arr,target, i=0){
    if(i == arr.length){
        if(target == 0){
            return 1;
        }else{
            return 0;
        }
    }
    const include = subSetSumRecursion(arr,target-arr[i],i+1,);
    const exclude = subSetSumRecursion(arr,target,i+1);
    return include + exclude;
}

const arr = [1,2,3,4,5];
const sum = 6;
console.log("Sub-Arrays whose sum is: ",sum," is ",subSetSumRecursion(arr,sum));