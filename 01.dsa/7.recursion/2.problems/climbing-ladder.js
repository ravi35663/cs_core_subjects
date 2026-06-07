/*
==> Climbing Ladder:
    Given a ladder containing N Steps, you can take a jump of 1, 2 or 3 at each step. 
    Find the number of ways to climb the ladder.
    Example:
        Input:
            n = 4
        Output: 7
*/

/*
==> Explanation: 
    F(n) = f(n-1) + f(n-2) + f(n-3)
    -> Derive tree of function
*/

/*
    Here T.C: O(3^n) ( function recalculates the same sub problems multiple times, leading to an exponential time complexity)
    Calls are:
        1,3,3^2,3^3 ..... (At each level of the tree)
*/

function climbingLadder(n){
    if(n == 1 || n == 0){
        return 1;
    }
    if(n == -1){
        return 0;
    }
    return climbingLadder(n-1) + climbingLadder(n-2) + climbingLadder(n-3)
}

const output = climbingLadder(4);
console.log("Output is: ",output);


