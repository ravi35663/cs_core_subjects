/*
    Subarray Sort
    Given an array of size at-least two, find the smallest subarray that needs to be sorted in place so that 
    entire input array becomes sorted. If the input array is already sorted, the function should return [-1, -1], 
    otherwise return the start & end index of the smallest subarray.

    Sample Input
    a1 = [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11]

    Sample Output
    [5, 7]
*/
function subArraySort(arr) {
    let n = arr.length;
    let minOutOfOrder = Infinity;
    let maxOutOfOrder = -Infinity;
    
    // Identify out-of-order elements
    for (let i = 0; i < n; i++) {
        if (isOutOfOrder(arr, i)) {
            minOutOfOrder = Math.min(minOutOfOrder, arr[i]);
            maxOutOfOrder = Math.max(maxOutOfOrder, arr[i]);
        }
    }

    // If no out-of-order elements, array is already sorted
    if (minOutOfOrder === Infinity) return [-1, -1];

    // Find the correct position to place the min and max out-of-order elements
    let leftIndex = 0;
    while (arr[leftIndex] <= minOutOfOrder) {
        leftIndex++;
    }

    let rightIndex = n - 1;
    while (arr[rightIndex] >= maxOutOfOrder) {
        rightIndex--;
    }

    return [leftIndex, rightIndex];
}

function isOutOfOrder(arr, i) {
    if (i === 0) return arr[i] > arr[i + 1];
    if (i === arr.length - 1) return arr[i] < arr[i - 1];
    return arr[i] > arr[i + 1] || arr[i] < arr[i - 1];
}

const arr = [1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11];
console.log(subArraySort(arr)); // Output: [5, 7]
