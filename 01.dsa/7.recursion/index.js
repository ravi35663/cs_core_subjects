/*
=> Divide and Conquer :-
    -   This pattern is designed to break large data sets into smaller chunks and repeat the process for 
        subsets of data .
    -   This pattern tremendously decreases the time complexity .
    -   few examples are: binary search, quick sort, merge sort ..etc
*/
/*
=> Recursion : -
	-   A function calls itself to find the desired result .
	-   There is always a base condition with recursion where it stops calling itself and returns the 
        initial result and based on that initial result the actual result will be printed.

    -   When a function is called then that function is pushed into the call stack.
    -   Once the function is executed then that function pops off from the call stack. In the stack 
        everything is moved from top of the stack.
    -   Recursion works in depth first manner (i.e. first last call happens then others) 
*/
/*
=> How to solve recursion problems?
    -   Recursion = Principle of mathematical induction
    -   Steps to solve recursion Problems:
            1) Figure out the smallest case
            2) Always 'Assume' the sub-problem can be solved
            3) Solve the current problem assuming sub-problem's solution exists.
*/
/*
=> Helper Method Recursion:
    ->  These kind of method used to collect somethings (like odd numbers, even number .etc)
*/ 
function outer(input){
    var outerScopeVariable = [];
    function inner(inputVariable){
        // modify outerScopeVariable here
        inner(inputVariable--);
    }
    inner(input);
    return outerScopeVariable;
}
/*
=> Pure Recursion : -
	-   For arrays, use methods like slice, spread, concat that make copies of arrays so you do not mutate 
        them. 

    -   Remember that strings are immutable so you will need to spread, slice, substr or substring to make 
        copies of strings.

    -   To make copies of objects use Object.assign or spread operator.
*/
function collectOddValues(arr){// pure recursion
	let odd = [];
    if(!arr.length){
    	return odd;
    }
    if(arr[0]%2 !==0 ){
        odd.push(arr[0]);
    }
    odd = odd.concat(collectOddValues(arr.slice(1)));
    return odd;
}
/*
=> Pitfall of recursion : 
	-> No base case
	-> Forgetting to return or returning the wrong thing
	-> stack overflow

=> Maximum call stack size exceeded: -
    -   we get this error when there is infinite functions pushed into the stack. It is also known as stack 
        overflow. It is RangeError
*/
// JavaScript Example of Head Recursion
function headRecursion(n) {
    if (n > 0) {
        headRecursion(n - 1);  // Recursive call before processing
        // This is called backtracking: Here value in console coming from back track:
        console.log(n + " ");  // Processing after recursion
    }
}
headRecursion(5); // 1 2 3 4 5

// JavaScript Example of Tail Recursion
function tailRecursion(n) {
    if (n === 0) return;
    console.log(n + " ");  // Processing before recursion
    tailRecursion(n - 1);  // Recursive call is the last action
}

tailRecursion(5); // 5 4 3 2 1