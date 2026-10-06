/*
Big O Notation
1. What is Big O?
    - Big O is used to analyze the performance of an algorithm.
    - It describes how runtime or memory usage grows as input size (N) grows.
    - It tells us how many operations an algorithm performs.

Example:
    function sum(n) {
        let s = 0;

        for (let i = 1; i <= n; i++) {
            s += i;
        }

        return s;
    }
- Loop runs N times → O(N) → Linear.

Better:
    function sum(n) {
        return n * (n + 1) / 2;
    }
- Fixed number of operations → O(1) → Constant.

Generally, we prefer algorithms with lower time and lower extra space, but there can be trade-offs.

2. Big O Rules
    Constant Operations → O(1)
    Generally constant-time operations:

    - Arithmetic operations
    - Variable assignment
    - Array access by index
    - Object property access by key
    arr[3]       // O(1)
    obj.city     // O(1)


Remove Constants:
    O(2N)                  → O(N)
    O(500)                 → O(1)
    O(13N²)                → O(N²)
    O(N + 1009)            → O(N)
    O(N³ + 10N² + 100)     → O(N³)
Keep the fastest-growing term and ignore constants.


Nested Loops
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
    }
}
Outer loop → N
Inner loop → N
Therefore:
O(N × N) = O(N²) → Quadratic.

performance.now() : JavaScript's performance.now() can be used to measure execution time in 
milliseconds.


3. Space Complexity
Space complexity tells us how much additional memory (auxiliary space) an algorithm needs.
Primitive Types
Values such as:
    - number
    - boolean
    - null
    - undefined 
        generally use O(1) space.

    let a = 1000;
    let b = true;
Fixed number of variables → O(1).


Example
    function sum(arr) {
        let total = 0;
        for (let i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total;
    }

Extra variables:
    - total
    - i

Fixed extra memory → O(1).
Input arr is not counted as auxiliary space.

Strings:
    A string generally requires space proportional to its length.
    let str = "learn js";
    Space → O(N), where N is the string length.


Arrays / Objects
- Array with N elements → O(N)
- Object with N keys → O(N)


Example

function double(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }

    return newArr;
}
newArr grows with the input size.
Space → O(N + 1) = O(N).


4. Common Complexity Order
    - From better to worse:
        O(1) < O(log N) < O(N) < O(N log N) < O(N²) < O(2ᴺ)

Common names:
    O(1)      → Constant
    O(log N)  → Logarithmic
    O(N)      → Linear
    O(N²)     → Quadratic


5. Logarithmic Complexity
    - Logarithmic algorithms reduce the problem size significantly at each step.
    - In DSA, log usually means log base 2.

Example:
    log₂(8) = 3
    because:
    2³ = 8
    O(log N) is better than O(N) because it grows much more slowly as N increases.
*/