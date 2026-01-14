/*
========================
SORTING – REVISION
========================
Sorting:
- Sorting is the process of rearranging elements in an array
- Order can be increasing or decreasing
- Examples:
  - Sorting numbers
  - Sorting names alphabetically
  - Sorting objects by a specific key
- Different sorting algorithms exist, each with pros & cons
- Monotonic order:
  - Elements are either entirely increasing or decreasing

--------------------------------
BUILT-IN ARRAY SORT (JavaScript)
--------------------------------
- Default JS sort works on STRING UNICODE values
  (not numeric by default)

Example:
[10, 2, 5].sort() → ["10","2","5"] ❌

- Use comparator function to define custom sorting logic

Syntax:
arr.sort((a, b) => a - b);

Comparator Rules:
- return negative → a comes before b
- return positive → b comes before a
- return 0        → order doesn't matter

Example:
*/
const nums = [5, 2, 9, 1];
nums.sort((a, b) => a - b);
console.log("Sorted numbers:", nums);

/*
--------------------------------
TIME & SPACE COMPLEXITY (SORTING)
--------------------------------

Algorithm        Best        Average      Worst        Space
--------------------------------------------------------------
Bubble Sort      O(n)        O(n²)         O(n²)        O(1)
Insertion Sort   O(n)        O(n²)         O(n²)        O(1)
Selection Sort   O(n²)       O(n²)         O(n²)        O(1)
Merge Sort       O(n log n)  O(n log n)    O(n log n)  O(n)
Quick Sort       O(n log n)  O(n log n)    O(n²)       O(log n)

--------------------------------
KEY TAKEAWAYS
--------------------------------
- Comparison-based sorting dominates most problems
- Built-in sort must always use comparator for numbers
- Space vs Time tradeoff varies by algorithm
- Choose algorithm based on constraints
*/