/*
    Subarray with 0 sum:

    Difficulty: Medium  Accuracy: 39.79% Submissions: 283K+ Points: 4
    
    Given an array of integers, arr[]. Find if there is a subarray (of size at least one) with 0 sum. 
    Return true/false depending upon whether there is a subarray present with 0-sum or not. 

    Examples:
        Input: arr[] = [4, 2, -3, 1, 6]
        Output: true
        Explanation: 2, -3, 1 is the subarray with a sum of 0.
        
        Input: arr = [4, 2, 0, 1, 6]
        Output: true
        Explanation: 0 is one of the element in the array so there exist a subarray with sum 0.
        
        Input: arr = [1, 2, -1]
        Output: false
    
    Constraints:
    1 <= arr.size <= 10^4
    -10^5 <= arr[i] <= 10^5
*/

// Brute-Force: TC: O(N^3)
// function subArraySum(arr,target){
//     // let sub_arrays = [];
//     let found_target_sum = false;
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             let sum = 0;
//             // let sub_arr = [];
//             for(let k=i;k<j+1;k++){
//                 sum +=arr[k];
//                 sub_arr.push(arr[k]);
//             }
//             // sub_arrays.push(sub_arr);
//             if(sum == target){
//                 found_target_sum = true;
//             }
//         }
//     }
//     return found_target_sum;
// }

// TC: O(N^2)
function subArraySum(arr,target){
    const prefix_sum = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] == 0){
            return true;
        }
    }
    prefix_sum[0] = arr[0];
    for(let i=1; i<arr.length; i++){
        const sum = prefix_sum[i-1] + arr[i];
        if(sum == 0){
            return true;
        }
        prefix_sum[i] = sum;
    }
    for(let i=1;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(prefix_sum[j] - prefix_sum[i-1] == 0){
                return true;
            }
        }
    }
    return false;
}

// More Optimization : TC: O(N)
function subArraySum(arr,target){
    const prefix_sum = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] == 0){
            return true;
        }
    }
    prefix_sum[0] = arr[0];
    for(let i=1; i<arr.length; i++){
        const sum = prefix_sum[i-1] + arr[i];
        if(sum == 0){
            return true;
        }
        prefix_sum[i] = sum;
    }
    for(let i=1;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(prefix_sum[j] - prefix_sum[i-1] == 0){
                return true;
            }
        }
    }
    return false;
}


const arr = [4, 2, -3, 1, 6];
console.log("Result is: ",subArraySum(arr,0));
