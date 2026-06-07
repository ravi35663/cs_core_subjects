/*
    Minimize the Heights II:
    Given an array arr[] denoting heights of N towers and a positive integer K.

    For each tower, you must perform exactly one of the following operations exactly once.

    Increase the height of the tower by K
    Decrease the height of the tower by K
    Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

    You can find a slight modification of the problem here.
    Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

    Examples :

    Input: k = 2, arr[] = {1, 5, 8, 10}
    Output: 5
    Explanation: The array can be modified as {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}.The difference between the largest and the smallest is 8-3 = 5.
    Input: k = 3, arr[] = {3, 9, 12, 16, 20}
    Output: 11
    Explanation: The array can be modified as {3+k, 9+k, 12-k, 16-k, 20-k} -> {6, 12, 9, 13, 17}.The difference between the largest and the smallest is 17-6 = 11. 
    Expected Time Complexity: O(n*logn)
    Expected Auxiliary Space: O(n)

    Constraints
    1 ≤ k ≤ 107
    1 ≤ n ≤ 105
    1 ≤ arr[i] ≤ 107

*/

// 
// function minHeight(arr,k){
//     const sorted_array = mergeSort(arr);
//     for(let i=0;i<sorted_array.length;i++){
//         if(i > 0){
//             const prev = sorted_array[i-1];
//             const current = sorted_array[i];
//             if(current - k < prev){
//                 sorted_array[i] = sorted_array[i] + k
//             }else{
//                 sorted_array[i] = sorted_array[i] - k
//             }
//         }else{
//             if(sorted_array[i] - k <=0 ){
//                 sorted_array[i] = sorted_array[i] + k;
//             }else{
//                 sorted_array[i] = sorted_array[i] - k;
//             }
//         }
//     }
//     return sorted_array[sorted_array.length-1] - sorted_array[0];
// }

// function mergeSort(arr){
//     if(arr.length <=1 ){
//         return arr;
//     }
//     const mid = Math.floor(arr.length/2);
//     const left = mergeSort(arr.slice(0,mid));
//     const right = mergeSort(arr.slice(mid));
//     return mergeSortedArray(left,right);
// }

// function mergeSortedArray(arr1,arr2){
//     let i=0,j=0,m=arr1.length,n = arr2.length;
//     const result = [];
//     while(i < m && j < n){
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
//     return result;
// }

/*
    Note: Does not solved yet:
*/