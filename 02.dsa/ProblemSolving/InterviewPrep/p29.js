/*
    Reverse an array in place.
    Input: [1, 2, 3, 4, 5]  
    Output: [5, 4, 3, 2, 1]
*/

function reverseArray(arr){
    const len = arr.length;
    for(let i=0;i<Math.floor(len/2);i++){
        [arr[i],arr[len-1-i]] = [arr[len-1-i],arr[i]];
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5,6] ;
const result = reverseArray(arr);
console.log("Reversed array is : ",result);