/*
Given an integer array nums, move all the 0's to the end of the array. The relative order of the other elements must remain the same.
This must be done in place, without making a copy of the array.

Example 1
Input: nums = [0, 1, 4, 0, 5, 2]
Output: [1, 4, 5, 2, 0, 0]

Example 2
Input: nums = [0, 0, 0, 1, 3, -2]
Output: [1, 3, -2, 0, 0, 0]

*/

class Solution {
    // Brute-force:
    // moveZeroes(nums) {
    //  for(let i=0; i<nums.length; i++){
    //     if(nums[i] == 0){
    //         //find non-zero and replace it with zero;
    //         let j = i+1;
    //         for(;j<nums.length && nums[j] == 0;j++){}
    //         if(j == nums.length){
    //             return nums;
    //         }else{
    //             [nums[i],nums[j]] = [nums[j],nums[i]];
    //         }
    //     }
    //  }  
    // }

    //Optimal:
    moveZeroes(nums) {
        let index = 0;
        for(let i=0; i<nums.length; i++){
            if(nums[i] != 0){
                nums[index++] = nums[i];
            }
        }
        for(let i=index;i<nums.length;i++){
            nums[i] = 0;
        }
        return nums;
    }
}