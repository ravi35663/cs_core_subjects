/*
Given an array nums and an integer k. Return true if there exist subsequences such that 
the sum of all elements in subsequences is equal to k else false.


Examples:
Input : nums = [1, 2, 3, 4, 5] , k = 8

Output : Yes
Explanation : The subsequences like [1, 2, 5] , [1, 3, 4] , [3, 5] sum up to 8.

Input : nums = [4, 3, 9, 2] , k = 10
Output : No
Explanation : No subsequence can sum up to 10.
*/

/*
==> Sub-Sequence:
    const arr = [1, 2, 3, 4, 5]
    sub-sequences are [1,2,3], [1,3,5],[3,5] and so on in the same order:
    what is not sub sequence: [3,1], [5,4,3], [5,3,1] and so on..
*/