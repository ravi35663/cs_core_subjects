/*
    Problem Statement: Given an array, we have to find the largest element in the array.
    Examples

    Example 1:
    Input: arr[] = {2,5,1,3,0};
    Output: 5
    Explanation: 5 is the largest element in the array. 

    Example2: 
    Input: arr[] = {8,10,5,7,9};
    Output: 10
    Explanation: 10 is the largest element in the array. 
*/

export function largest(arr){
    let max = arr[0];
    arr.forEach(item=>{
        if(item > max){
            max = item;
        }
    })
    return max;
}

const arr = [2,5,1,3,0];
const max = largest(arr);
console.log("Maximum number is: ",max);
