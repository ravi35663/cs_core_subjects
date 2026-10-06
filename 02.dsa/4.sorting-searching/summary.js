/*
========================================
SORTING AND SEARCHING - SUMMARY
========================================
Sorting is the process of rearranging elements in a collection so they follow an order such as 
ascending, descending, or a custom comparison rule.

1) BUILT-IN ARRAY SORT IN JAVASCRIPT
  - JavaScript's default sort() sorts based on string Unicode values.
  - For numbers, it can produce wrong results unless we provide a comparator.
  - Example: [10, 2, 5].sort() => ["10", "2", "5"]
  - Correct numeric sorting: arr.sort((a, b) => a - b)

Comparator rules:
  - return negative  => a comes before b
  - return positive  => b comes before a
  - return 0         => order does not matter

2) COMMON SORTING ALGORITHMS
----------------------------
Bubble Sort
  - Repeatedly compares adjacent elements and swaps if needed.
  - Largest elements bubble toward the end.
  - Time Complexity: Best O(n), Average O(n^2), Worst O(n^2)
  - Space Complexity: O(1)
  - Good for learning and small arrays.
  - Optimized Bubble Sort stops early if no swaps happen in a pass.

Insertion Sort
  - Builds a sorted section gradually, inserting each new item in the correct place.
  - Works well for small or nearly sorted arrays.
  - Time Complexity: Best O(n), Average O(n^2), Worst O(n^2)
  - Space Complexity: O(1)

Selection Sort
  - Repeatedly selects the smallest remaining element and places it in the correct position.
  - Time Complexity: O(n^2)
  - Space Complexity: O(1)

Merge Sort
  - Divide and conquer technique.
  - Splits array into halves, sorts each half, then merges them.
  - Time Complexity: O(n log n)
  - Space Complexity: O(n)
  - Stable and efficient for large datasets.

Quick Sort
  - Chooses a pivot and partitions the array around it.
  - Left side contains smaller values, right side larger values.
  - Time Complexity: Average O(n log n), Worst O(n^2)
  - Space Complexity: O(log n) recursion stack (in-place partitioning)

Counting Sort
  - Best when the value range is small and known.
  - Counts frequency of each value and reconstructs sorted values.
  - Time Complexity: O(n + k), where k = range of values
  - Space Complexity: O(k)

DNF (Dutch National Flag) Algorithm
  - Used to arrange arrays with only three values like 0, 1, 2.
  - Uses three pointers: low, mid, high.
  - Time Complexity: O(n)
  - Space Complexity: O(1)
  - Efficient single-pass method for 3-way partitioning.

3) SEARCHING ALGORITHMS
-----------------------
Linear Search
  - Checks each element one by one from start to end.
  - Works on unsorted arrays.
  - Time Complexity: O(n)

Binary Search
  - Works only on sorted arrays.
  - Repeatedly splits the search range in half.
  - Time Complexity: O(log n)
  - Faster than linear search for large sorted data sets.

4) COMPLEXITY SUMMARY
---------------------
  Algorithm          Best        Average        Worst        Space
  ---------------------------------------------------------------
  Bubble Sort        O(n)        O(n^2)         O(n^2)       O(1)
  Insertion Sort     O(n)        O(n^2)         O(n^2)       O(1)
  Selection Sort     O(n^2)      O(n^2)         O(n^2)       O(1)
  Merge Sort         O(n log n)  O(n log n)     O(n log n)   O(n)
  Quick Sort         O(n log n)  O(n log n)     O(n^2)       O(log n)
  Counting Sort      O(n + k)    O(n + k)       O(n + k)     O(k)
  Linear Search      O(1)        O(n)           O(n)         O(1)
  Binary Search      O(1)        O(log n)       O(log n)    O(1)

5) KEY TAKEAWAYS
----------------
  - Sorting reorganizes elements into an ordered form.
  - Comparison-based algorithms are useful when values are arbitrary.
  - For large datasets, prefer O(n log n) algorithms like Merge Sort or Quick Sort.
  - Binary search is much faster than linear search but requires sorted input.
  - Built-in sort must use a comparator when sorting numbers.
  - The right algorithm depends on the input size, data range, and memory constraints.

Example:
*/

const nums = [5, 2, 9, 1, 10];
nums.sort((a, b) => a - b);
console.log("Sorted numbers:", nums);

const arr = [1, 3, 5, 2, 4];
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return -1;
};

console.log("Binary search result:", binarySearch([1, 2, 3, 4, 5], 4));
