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
function subarraySorting(arr) {
    let left = -1;
    let right = -1;

    // Find the left boundary where the order is violated
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            left = i;
            break;
        }
    }

    // If no violation is found, the array is already sorted
    if (left === -1) {
        return [-1, -1];
    }

    // Find the right boundary where the order is violated
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i - 1] > arr[i]) {
            right = i;
            break;
        }
    }

    // Find the minimum and maximum elements in the subarray
    let subarrayMin = Math.min(...arr.slice(left, right + 1));
    let subarrayMax = Math.max(...arr.slice(left, right + 1));

    // Expand left boundary if necessary
    while (left >= 0 && arr[left] > subarrayMin) {
        left--;
    }

    // Expand right boundary if necessary
    while (right < arr.length && arr[right] < subarrayMax) {
        right++;
    }

    return [left + 1, right - 1];
}

// Example Usage:
// const arr = [0, 2, 4, 7, 10, 11, 7, 12, 13, 14, 16, 19, 29];
const arr = [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11 ];
const result = subarraySorting(arr);
console.log(result); // Output: [4, 6]
