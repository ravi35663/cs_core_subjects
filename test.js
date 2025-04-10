/*
    arr = [1,2,-3,4,-1]
    prefix sum sub-array is method to calculate maximum or minimum sub array in an array
    ==> Here time complexity is O(n^2)
*/
// Dry- Run and try to understand how its works


function maxSumSubArray(arr){
    const prefix_sum = [arr[0]];
    for(let i=1; i<arr.length; i++){
        prefix_sum[i] = prefix_sum[i-1] + arr[i];
    }
    let max_sum = 0;
    for(let i=0; i<arr.length; i++){
        for(let j=i;j<arr.length;j++){
            const sum = (i == 0 ? prefix_sum[i] : (prefix_sum[j] - prefix_sum[i-1]))
            if(sum > max_sum){
                max_sum = sum;
            }
        }
    }
    return max_sum;
}
// const arr = [1,2,-3,4,-1]
const arr = [1,3,-4,5,7];
console.log('max Sub array is: ',maxSumSubArray(arr));