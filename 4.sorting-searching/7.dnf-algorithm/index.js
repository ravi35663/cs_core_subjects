/*
==============================
DNF (DUTCH NATIONAL FLAG) – REVISION
==============================

Purpose:
- Efficiently segregates an array containing exactly three distinct values
- Commonly used for sorting 0s, 1s, and 2s
- Proposed by Edsger Dijkstra

Core Idea:
- Divide array into three regions:
  1) Low   → first type (0)
  2) Mid   → second type (1)
  3) High  → third type (2)

Pointers:
- low  → boundary for first type
- mid  → current index being scanned
- high → boundary for third type

Algorithm Steps:
1) Initialize: low = 0, mid = 0, high = n - 1
2) Loop while mid <= high
   - If arr[mid] == first type:
       swap(arr[mid], arr[low])
       low++, mid++
   - If arr[mid] == second type:
       mid++
   - If arr[mid] == third type:
       swap(arr[mid], arr[high])
       high--

Time Complexity: O(n)
Space Complexity: O(1)
In-place & Single pass

Example Implementation:
*/
function DNFAlgorithm(arr) {
    let low = 0, mid = 0, high = arr.length - 1;
    const first = 0, second = 1, third = 2;

    while (mid <= high) {
        if (arr[mid] === first) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            low++; mid++;
        } else if (arr[mid] === second) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}

// Example Input & Output
const arr = [0, 0, 1, 2, 0, 1, 2, 0];
console.log("DNFAlgorithm:", DNFAlgorithm(arr));