/*
    Move all negative numbers to beginning and positive to end with constant extra space
    An array contains both positive and negative numbers in random order. 
    Rearrange the array elements so that all negative numbers appear before all positive numbers.
    Examples : 
    Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
    Output: -12 -13 -5 -7 -3 -6 11 6 5

    Note: Order of elements is not important here. solve this question with O(N) TC and O(1) space complexity:

*/

// Brute - force - Approach
// function moveNegativeAndPositive(arr){
//     return sortArray(arr);
// }

// const sortArray = (arr)=>{
//     if(arr.length <= 1){
//         return arr;
//     }
//     const mid = Math.floor(arr.length/2);
//     const left = sortArray(arr.slice(0,mid));
//     const right = sortArray(arr.slice(mid));
//     return mergeSortedArray(left,right);
// }
// const mergeSortedArray = (arr1,arr2)=>{
//     let i=0,j=0,m = arr1.length, n=arr2.length;
//     const result = [];
//     while(i<m && j<n){
//         if(arr1[i] < arr2[j]){
//             result.push(arr1[i++]);
//         }else{
//             result.push(arr2[j++]);
//         }
//     }
//     while(i<m){
//         result.push(arr1[i++]);
//     }
//     while(j<n){
//         result.push(arr2[j++]);
//     }
//     return result
// }

// Efficient Approach 1: T.C: O(N) and S.C: O(N)
// function moveNegativeAndPositive(arr){
//     const updated_arr = [];
//     // Add all negative elements here 
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] < 0){
//             updated_arr.push(arr[i]);
//         }
//     }
//     // Add all positive elements here 
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] > 0){
//             updated_arr.push(arr[i]);
//         }
//     }
//     return updated_arr;
// }

// function moveNegativeAndPositive(arr){
//     let i=0;
//     while(i<arr.length){
//         if(arr[i] > 0){
//             // find next negative number and then swap that negative number with the positive one:
//             let j = i+1;
//             while(arr[j] &&  arr[j] > 0){
//                 j++;
//             }
//             if( j < arr.length){
//                 [arr[i],arr[j]] = [arr[j],arr[i]];    
//             } 
//         }
//         i++;
//     }
//     return arr;
// }

// Efficient approach 2 with O(N) TC and O(1) space complexity: Two pointer approach:
function moveNegativeAndPositive(arr){
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        if(arr[start] < 0){
            start ++;
        }else if(arr[end] > 0){
            end--;
        }else{
            [arr[start],arr[end]] = [arr[end],arr[start]];
            start++;
            end--;
        }
    }
    return arr;
}

const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];
const result = moveNegativeAndPositive(arr);
console.log("Result is: ",result);
