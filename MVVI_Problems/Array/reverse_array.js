/*
    Array Reverse:
        Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the 
        elements such that the first element becomes the last, the second element becomes second last and so 
        on.

    Input: arr[] = {1, 4, 3, 2, 6, 5}  
    Output: {5, 6, 2, 3, 4, 1}
    Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.


    Input: arr[] = {4, 5, 1, 2} 
    Output: {2, 1, 5, 4}
    Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on.
*/

function reverseArray(arr){
    let len = arr.length;
    const half_len = Math.floor(len/2);
    for(let i=0;i<half_len;i++){
        [arr[i],arr[len-i-1]]  = [arr[len-i-1],arr[i]];
    }
    return arr;
}

const arr = [..."123456789"];
const result = reverseArray(arr);
console.log("Result is : ",result);