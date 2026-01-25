/*
    Sliding Window - minSubArrayLen
    Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

    This function should return the minimal length of a contiguous subarray of which the sum is greater than 
    or equal to the integer passed to the function. 
    If there isn't one, return 0 instead.
    Examples:

    minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
    minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
    minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
    minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
    minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
    minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
    minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
    
    Time Complexity - O(n)
    Space Complexity - O(1)
*/ 

/* 
    To understand this approach dry and run the program and visualized solution:
*/

// Method - 1
function findMinSubArray(nums,sum) {
    // Infinity is greatest numbers of all numbers as we already know.
    let minLength = Infinity;
    let total = 0;
    let start = 0;
    let end = 0;
    console.log("Min length is ",minLength);
    // run this loop untill start less than length of num
    while(start < nums.length){
        // create a window which sum of items greater or equal to sum
        if(total < sum && end < nums.length){
            total += nums[end];
            end++;
        }
        // if total sum  of current created window items is greater than sum then 
        // reduce the window and find another sum with on less value of start
        else if(total >= sum){
            // This is used to get the window size
            minLength = Math.min(minLength,end-start);
            total -= nums[start];
            start++;
        }
        // If non of the condition is true then break the loop
        else{
            break;
        }
    }
    return minLength === Infinity ? 0 :minLength  
}



const minLenSubArray = findMinSubArray([2,3,1,2,4,3],7);

console.log("Min length sub array",minLenSubArray);

// Method - 2
function findMinSubArray(arr,targetSum){
    let currentSum = 0;
    let end = 0;
    let start = 0;
    let minLength  = Infinity;
    while(end < arr.length){
        currentSum += arr[end];
        while(currentSum >= targetSum){
            minLength = Math.min(minLength,end-start + 1);
            currentSum -= arr[start];
            start++;
        }
        end++;
    }
    return minLength === Infinity?0:minLength;
}
// const minLenSubArray = findMinSubArray([2,3,1,2,4,3],7);
