/*
===============
SLIDING WINDOW 
===============

Sliding Window is an optimization technique used for array/string problems.
It reduces time complexity (often O(n²) → O(n)) by avoiding recomputation.

Core idea:
  - Maintain a window (subarray / substring)
  - Expand from one side
  - Shrink from the other side
  - Update window state incrementally
*/

/*
--------------------------------
1) FIXED WINDOW (Size = K)
--------------------------------
  - Window size is constant
  - Used to find max/min/sum/avg in each window
  - Window state maintained using variables or DS
*/
/*
Example:
  Find maximum sum of any subarray of size k
*/

function maxSum(arr, k) {
    let windowSum = 0;
    let maxSum = 0;
  
    // first window
    for (let i = 0; i < k; i++) {
      maxSum += arr[i];
    }
  
    windowSum = maxSum;
  
    // slide window
    for (let i = k; i < arr.length; i++) {
      windowSum += arr[i] - arr[i - k];
      maxSum = Math.max(maxSum, windowSum);
    }
  
    return maxSum;
}

let arr1 = [1, 3, 2, 5, 7, 2];
let k1 = 3;
console.log("Max sum of subarray:", maxSum(arr1, k1));
  
/*
--------------------------------
2) VARIABLE WINDOW (Two Pointers + Condition)
--------------------------------
  - Window size is dynamic
  - Expand until condition breaks
  - Shrink until condition becomes valid
*/
/*
Example 1:
  Longest substring without repeating characters

  Input: "abcabcbb"
  Output: 3
*/
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
let str = "abcabcbb";
console.log("Longest unique substring length:",lengthOfLongestSubstring(str));  
/*
--------------------------------
Example 2:
  Longest subarray with sum ≤ K
  
  arr = [2,5,1,7,10], k = 14
*/
  
/*
=>  Approaches:
    1) Brute force (generate all subarrays)
    2) Sliding window (optimal)
*/
  
function longestSubarraySum(arr, k) {
    let left = 0;
    let right = 0;
    let sum = 0;
    let maxLen = 0;
  
    while (right < arr.length) {
      sum += arr[right];
  
      if (sum <= k) {
        maxLen = Math.max(maxLen, right - left + 1);
        right++;
      } else {
        sum -= arr[left];
        left++;
      }
    }
  
    return maxLen;
}
  
  
let arr2 = [2, 5, 1, 7, 10];
let k2 = 14;
console.log("Longest subarray with sum <= k:",longestSubarraySum(arr2, k2));
  
/*
--------------------------------
3) COUNT SUB-ARRAYS WITH CONDITION
--------------------------------
  - Used when counting sub-arrays instead of length.

Example:
  Number of sub-arrays with sum = k

Trick:
  count(sum ≤ k) - count(sum ≤ k - 1)
*/
  
/*
--------------------------------
4) MINIMUM / SHORTEST WINDOW:
--------------------------------
  - Expand window until condition is met
  - Shrink aggressively to minimize window size

Used in:
  - Minimum window substring
  - Shortest subarray with sum ≥ k
*/
  
/*
--------------------------------
=>  KEY TAKEAWAYS
--------------------------------
  - Fixed window → size known
  - Variable window → condition-based
  - Two pointers control expand/shrink
  - Update window state incrementally
  - Avoid recomputation → O(n)
*/  