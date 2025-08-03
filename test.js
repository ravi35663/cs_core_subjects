// JavaScript Example of Head Recursion
function headRecursion(n) {
    if (n > 0) {
        headRecursion(n - 1);  // Recursive call before processing
        console.log(n + " ");  // Processing after recursion
    }
}
headRecursion(5); // 1 2 3 4 5