/*
    Check if an array is sorted in non-decreasing order.
    Input: [1, 2, 2, 3, 4, 5]
    Output: True
*/

function isIncreasingArray(arr){
    for(let i=0;i<arr.length-1;i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

const arrs = [
    [1, 3, 3, 5, 7, 8],//True
    [10, 9, 8, 7, 6, 5],//False
    [4, 4, 4, 4, 4],//True
    [2, 4, 6, 8, 10],//True
    [5, 3, 2, 1],//False
    [1, 2, 2, 3, 3, 4],//True
    [7, 7, 5, 6, 8, 9],//False
    [0, 1, 1, 1, 2],//True
    [3, 3, 3, 2, 2, 2],//False
    [1]//True
]
arrs.forEach(element => {
    console.log("is non-decreasing array: ",isIncreasingArray(element));
});