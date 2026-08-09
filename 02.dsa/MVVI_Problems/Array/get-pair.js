/*
    Given an integer array arr, return all the unique pairs [arr[i], arr[j]] such that i != j and arr[i] + arr[j] == 0.


    Note: The pairs must be returned in sorted order, the solution array should also be sorted, and the 
    answer must not contain any duplicate pairs.
    
    Examples:
        Input: arr = [-1, 0, 1, 2, -1, -4]
        Output: [[-1, 1]]
        Explanation: arr[0] + arr[2] = (-1)+ 1 = 0.
        arr[2] + arr[4] = 1 + (-1) = 0.
        The distinct triplets are [-1,1].

        Input: arr = [6, 1, 8, 0, 4, -9, -1, -10, -6, -5]
        Output: [[-6, 6],[-1, 1]]
        Explanation: The distinct triplets are [-1, 1] and [-6, 6].
    
    Expected Time Complexity: O(n log n)
    Expected Auxiliary Space: O(n).

    Constraints:
    3 <= arr.size <= 105
    -105 <= arr[i] <= 105
*/

function getPair(arr){
    let obj = {};
    let result = [];
    let start = 0;
    let end = arr.length-1;
    arr.sort((a,b)=> a-b);
    while(start < end){
        const sum = arr[start] + arr[end];
        if(sum === 0){
            res.push([arr[start],arr[end]]);
            start++; 
        }else if(sum < 0){
            start++
        }else{
            end--;
        }
    }
    return result;
}

const arr = [-1, 0, 1, 2, -1, -4];
const result = getPair(arr);
console.log("Result is: ",result);