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
/*
===========================================================
    SUBSEQUENCE: TAKE / NOT TAKE PATTERN
===========================================================

Problem:
    Given an array nums and an integer k, return true if there exists a subsequence whose sum is equal 
    to k.

Example:
    nums = [1, 2, 3, 4, 5], k = 8
    Possible answer:
        [1, 2, 5] → 8
        [1, 3, 4] → 8
        [3, 5]    → 8


===========================================================
    TAKE / NOT TAKE ALGORITHM
===========================================================

At every element, we have 2 choices:

    1. TAKE the current element
        → Add it to the sum and move to the next element.

    2. NOT TAKE the current element
        → Skip it and move to the next element.

Example:

                    [1,2,3]
                       |
                 Take 1 / Not Take 1
                  /             \
               [2,3]           [2,3]
                 |                |
           Take 2 / Skip 2   Take 2 / Skip 2
              ...              ...

Base Cases:
    1. If sum === k
        → Subsequence found → return true.

    2. If we reach the end of the array
        → No subsequence found → return false.

    3. If sum > k
        → Can return false ONLY when all numbers are non-negative.

*/

function isSubsequenceSum(nums, k) {
    function solve(index, sum) {
        // Target sum found
        if (sum === k) {
            return true;
        }

        // Reached the end
        if (index === nums.length) {
            return false;
        }

        // Take the current element
        const take = solve( index + 1, sum + nums[index]);

        // Not take the current element
        const notTake = solve(index + 1, sum);

        // If either choice finds the target
        return take || notTake;
    }

    return solve(0, 0);
}


// Example 1
const nums1 = [1, 2, 3, 4, 5];
const k1 = 8;

console.log(isSubsequenceSum(nums1, k1));
// true


// Example 2
const nums2 = [4, 3, 9, 2];
const k2 = 10;

console.log(isSubsequenceSum(nums2, k2));
// false


/*
===========================================================
SHORT ALGORITHM TO REMEMBER
===========================================================

solve(index, sum):

    if sum === k:
        return true

    if index === nums.length:
        return false

    take     = solve(index + 1, sum + nums[index])
    notTake  = solve(index + 1, sum)

    return take || notTake


Time Complexity: O(2^N)
Space Complexity: O(N)  → recursion stack


IMPORTANT:
    This pattern is:
        TAKE
          ↓
        solve(next, sum + current)

        NOT TAKE
          ↓
        solve(next, sum)

    It is commonly used for:
        - Subsequence problems
        - Subset problems
        - Subset Sum
        - Combination problems
        - Partition problems
        - 0/1 Knapsack
*/