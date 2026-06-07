/*
    WAP to find max sum of a sub with n consecutive digits.
*/

// Here T.C = O(n^2)
// const maxSubArraySum = (arr,n)=>{
//     if(arr.length < n){
//         return null;
//     }
//     let max_sum = 0;
//     for(let i=0;i<n;i++){
//         max_sum +=arr[i];
//     }
//     let temp_i = 1;
//     let temp_sum = max_sum;
//     let count = 0;
//     while(temp_i < arr.length){
//         console.log(temp_i);
//         temp_sum += arr[temp_i];
//         count++;
//         temp_i++;
//         if(count === n){
//             if(temp_sum > max_sum){
//                 max_sum = temp_sum;
//             }
//             temp_sum = 0;
//             temp_i = temp_i - n + 1;
//             count = 0;
//         }
//     }
//     console.log('Max sum is ',max_sum);
// }

// Sliding window approach
// Here T.C = O(n)
const maxSubArraySum = (arr,n)=>{
    if(arr.length < n){
        return null;
    }
    let max_sum = 0;
    for(let i=0;i<n;i++){
        max_sum +=arr[i];
    }
    let sum = max_sum
    for(let i=n; i<arr.length;i++){
        // adding very next element of n consecutive number into max_sum and subtracting very 
        //first element of n consecutive array
        sum = sum + arr[i] - arr[i-n];
        if(sum > max_sum){
            max_sum = sum;
        }
    }
    console.log(max_sum);
    return max_sum;
}

maxSubArraySum([1,2,5,2,8,1,5],2);
maxSubArraySum([1,2,5,2,8,1,5],3);
maxSubArraySum([1,2,5,2,8,1,5],4);
maxSubArraySum([1,2,5,2,8,1,5],5);