/*
    Given an array arr, rotate the array by one position in clock-wise direction.
    
    Examples:
        Input: arr = [1, 2, 3, 4, 5]
        Output: [5, 1, 2, 3, 4]
        Explanation: 
            If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted 
            to the end.
        Input: arr = [9, 8, 7, 6, 4, 2, 1, 3]
        Output: [3, 9, 8, 7, 6, 4, 2, 1]
        Explanation: After rotating clock-wise 3 comes in first position.
        
        Expected Time Complexity: O(n)
        Expected Auxiliary Space: O(1)

    Constraints:
    1<=arr.size()<=10^5
    0<=arr[i]<=10^5

*/

function rotateArray(arr){
    for(let i=arr.length-1;i>0;i--){
        [arr[i],arr[i-1]] = [arr[i-1],arr[i]];
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5];
const updated_arr = rotateArray(arr);
console.log("Rotated array is: ",updated_arr);