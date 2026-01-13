/*
    Sorting Subarray:
        Write a function that takes in an array and returns two integers, denoting starting and ending 
        indices of the smallest subarray in the input array that needs to be sorted in place so that the
        entire input is sorted.
        If the input array is already sorted, return a pair [-1,-1].

    Sample Input:
        [0, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 19, 29]
    Sample Output:
        [4,6]
    Explanation:
        If we sort the subarray [10, 11, 7] then entire array becomes sorted.
*/

// [0, 2, 4, 7,, 10, 11, 7, 12, 13, 14, 16, 19, 29]

function sortingSubArray(arr){
    let pivot_index = 0;
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1] - arr[i] < 0 ){
            pivot_index = i + 1;
        }
    }

    for(let i=0;i<pivot_index;i++){
        if(arr[i] > arr[pivot_index]){
            return [i,pivot_index];
        }
    }
    return [-1,-1];
}
const arr = [0, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 19, 29];
console.log("Result array is: ",sortingSubArray(arr));
