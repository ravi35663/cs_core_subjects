
/*
    Smallest subarray with sum greater than x:

    Given a number x and an array of integers arr, find the smallest subarray with sum greater than the 
    given value. If such a subarray do not exist return 0 in that case.

    Examples:
        Input: x = 51, arr[] = [1, 4, 45, 6, 0, 19]
        Output: 3
        Explanation: Minimum length subarray is [4, 45, 6]
        Input: x = 100, arr[] = [1, 10, 5, 2, 7]
        Output: 0
        Explanation: No subarray exist
        Constraints:
        1 ≤ arr.size, x ≤ 105
        0 ≤ arr[] ≤ 104
*/

function smallestSubWithSum(arr, x) {
    let minLength = arr.length + 1;
    for(let i=0;i<arr.length;i++){
        let sum = 0;
        let count = 0;
        for(let j=i;j<arr.length;j++){
            count++;
            sum += arr[j];
            if(sum > x){
                if(minLength > count){
                    minLength = count;
                }
                break
            }
        }
    }
    if(minLength == arr.length + 1){
        return 0
    }
    return minLength
}

const x = 510, arr = [1, 4, 45, 6, 0, 19];
console.log(smallestSubWithSum(arr,x));
