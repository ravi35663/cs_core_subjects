/*
Left Rotate Array by K Places:
Given an integer array nums and a non-negative integer k, rotate the array to 
the left by k steps.


Example 1
Input: nums = [1, 2, 3, 4, 5, 6], k = 2
Output: nums = [3, 4, 5, 6, 1, 2]

Explanation:
rotate 1 step to the left: [2, 3, 4, 5, 6, 1]
rotate 2 steps to the left: [3, 4, 5, 6, 1, 2]

Example 2
Input: nums = [3, 4, 1, 5, 3, -5], k = 8
Output: nums = [1, 5, 3, -5, 3, 4]

Explanation:
rotate 1 step to the left: [4, 1, 5, 3, -5, 3]
rotate 2 steps to the left: [1, 5, 3, -5, 3, 4]
rotate 3 steps to the left: [5, 3, -5, 3, 4, 1]
rotate 4 steps to the left: [3, -5, 3, 4, 1, 5]
rotate 5 steps to the left: [-5, 3, 4, 1, 5, 3]
rotate 6 steps to the left: [3, 4, 1, 5, 3, -5]
rotate 7 steps to the left: [4, 1, 5, 3, -5, 3]
rotate 8 steps to the left: [1, 5, 3, -5, 3, 4]

Example 3
Input: nums = [1, 2, 3, 4, 5], k = 4
Output:
[5, 1, 2, 3, 4]
*/

/*
Solution: optimal:
    1) Reverse the 1st k part of the array
    2) Reverse the rest part of the array
    3) Reverse the entire array:
*/

function rotateArray(arr,k){
    k = k %  arr.length;
    reverseArray(arr,0,k-1);
    reverseArray(arr,k,arr.length-1);
    reverseArray(arr,0,arr.length-1);
    return arr;
}

function reverseArray(arr,start,end){
    while(start<=end){
        [arr[start],arr[end]] = [arr[end],arr[start]];
        start++;
        end--;
    }
}

const nums = [3, 4, 1, 5, 3, -5], k = 8;
console.log("Rotated Array is: ",rotateArray(nums,k));