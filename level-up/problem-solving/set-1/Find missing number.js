/*
Given an integer array of size n containing distinct values in the range from 
0 to n (inclusive), return the only number missing from the array within this 
range.


Example 1
Input: nums = [0, 2, 3, 1, 4]
Output: 5

Example 2
Input: nums = [0, 1, 2, 4, 5, 6]
Output: 3
*/
class Solution {
    missingNumber(nums) {
        let sum = 0;
        let sum2 = 0;
        for(let i=0;i<nums.length;i++){
            sum +=(i+1)
            sum2 += nums[i];
        }
        return sum - sum2;
    }
}