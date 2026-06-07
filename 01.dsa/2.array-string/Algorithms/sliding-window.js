/*
=>  Sliding Window Technique:
        When to Use: Problems involving sums, averages, or fixed-size sub arrays.

        Example: Find the maximum sum of a subarray of size k.
    Steps:
        Start with a window of size k.
        Slide the window by one element, updating the sum as you move.
        Keep track of the maximum/minimum sum encountered.
*/

// Example: Find the maximum sum of a subarray of size k.
function maxSum(arr,k){
    let sum = 0;
    for(let i=0;i<k;i++){
        sum +=arr[i];
    }
    let max_sum = sum;
    for(let i=k;i<arr.length;i++){
        sum += arr[i] - arr[i-k];
        if(sum > max_sum){
            max_sum = sum;
        }
    }
    return max_sum;
}