/*
    arr = [1,2,-3,4,-1]
    prefix sum sub-array is method to calculate maximum or minimum sub array in an array
    ==> Here time complexity is O(n^2)
*/
// Dry- Run and try to understand how its works
function maxSumSubArray(arr){
    let prefix_sum = new Array(arr.length);
    prefix_sum[0] = arr[0]; 
    for(let i=1;i<arr.length;i++){
        prefix_sum[i] = prefix_sum[i-1] + arr[i];
    }
    let max_sum = arr[0];
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            let sum = i > 0 ? prefix_sum[j] - prefix_sum[i-1]: prefix_sum[j];
            if(sum > max_sum){
                max_sum = sum;
            }
            console.log("Sum is : ",sum);
        }   
    }
    return max_sum;
}
// const arr = [1,2,-3,4,-1]
const arr = [1,3,-4,5,7];
console.log('max Sub array is: ',maxSumSubArray(arr));