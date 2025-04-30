/*
===> Sliding Window:
    ->  Sliding window technique is useful for solving problems in array/strings, especially it is 
        considered as technique that could reduced the time complexity from O(n^2) to O(n).
    ->  In Sliding Window problems you may need to expand window from one side and contract window from 
        the other side. 
*/

/*
===> Types of problems  :-
    1) Fixed window Length K:
        ->  The length of the window is fixed and it asks you to find something in the window as as the 
            maximum or median number of each window.
        ->  Usually we need these kinds of variables to maintain the "state of the window" some are as simple 
            as a or it could be complected as some advanced data structure such as list, queue or dequeue. 

    2) Two Pointers + Criteria :-
        ->  The window size is not fixed, usually it asks you to find the subarray that meets the criteria.
        ->  For example: given an array of integers, find the number of sub arrays whose sum is equal to a target value.
*/

/*
    The sliding window approach is a simple and efficient technique to solve problems involving 'arrays' or 
    'strings' by examining a "window" (a subset of elements) that slides through the array, adjusting its size 
    or position as needed.

    Short Explanation:

    You start with a small portion (or window) of an array or string and move the window from left to right. 
    Instead of recalculating everything from scratch every time, you just adjust the current window by adding 
    new elements to it and removing old ones. This reduces the number of calculations, making the solution 
    faster.
*/

/*
    Example:
    Problem:     
        Find the maximum sum of any subarray of size k in an array.
    
    Solution: 
        Using a sliding window, we first calculate the sum of the first k elements (the first window). Then, 
        we slide the window by one element at a time. For each new window, we subtract the element that's no 
        longer in the window and add the new element.
*/


// This is example of fixed sized window:
function maxSum(arr, k){
    let windowSum = 0;
    let maxSum = 0;
    for(let i=0;i<k;i++){
        maxSum += arr[i]
    }
    windowSum = maxSum;
    for(let i=k;i<arr.length;i++){
        windowSum += arr[i] - arr[i-k];
        if(maxSum < windowSum){
            maxSum = windowSum;
        }
    }
    return maxSum;
}

let arr = [1, 3, 2, 5, 7, 2];
let k = 3
const result = maxSum(arr,k);
console.log("Max sum is : ",result)


// Example of variable size window:
/*
    Given a string s, find the length of the longest substring without repeating characters.

    Input: "abcabcbb"
    Output: 3
    Explanation: The answer is "abc", with the length of 3.
*/

/*
==> Why it's a variable-size sliding window:
    ->  The window expands when characters are unique.
    ->  The window shrinks from the left when a duplicate is found.
*/
// Dry-Run this program to understand it better:
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, maxLen = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            console.log("While is running :")
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

const s = "abcabcbb";
const re = lengthOfLongestSubstring(s);
console.log("Max length unique string is: ",re);