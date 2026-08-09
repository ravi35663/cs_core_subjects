/*
==> Tiling Problem!
    You are given N tiles of size 1 x M, There is a floor of size N x M which you have to cover 
    with tiles. Find the number of ways the floor can be completely covered if you can place the 
    tiles in both horizontal and vertical manner.

    Input Format:
    In the function, two integers N and M are passed.

    Output Format:
    Return a single integer denoting the number of ways.

    Sample Input:
    4 3

    Sample Output:
    3

*/


function waysToCoverFloor(n,m){
    if(n < m){
        return 1;
    }
    const horizontal =  waysToCoverFloor(n-1,m); // 1 * m
    const vertical =    waysToCoverFloor(n-m,m); // m * 1
    return horizontal + vertical;

}


const n = 10;
const m = 3;
console.log("Number of ways to cover floor: ",waysToCoverFloor(n,m))