/*
    Kadane's Algorithms:
    -> This algorithm is used to find maximum sub array sum in linear time complexity
    -> if all the array elements are negative then maximum of all element is a max-sub array
    -> if current sum is negative reset it to zero
    -> it does not contains extra space like prefix approach.
    -> Time complexity is O(n) and space is constant.
    Example:
        e.g.
        arr = [-2,3,4,-1,5,-12,6,1,3,2]
        Elements:    -2     3   4   -1    5      -12    6   1     3       2
        CS:           0     3   7   6     11       0    6   7    10      12    
        MS:           0     3   7   7     11       11   11  11   11      12       
*/

function maxSubArraySum(arr){
    let cs = 0, max = -Infinity;
    let sub_array = [];
    let result_sub_array;
    for(let i=0;i<arr.length;i++){
        cs +=arr[i];
        sub_array.push(arr[i])
        if(max < cs){
            result_sub_array = [...sub_array]
            max = cs;
        }
        if(cs < 0){
            sub_array = [];
            cs = 0;
        }
    }
    console.log("Sub array is: ",result_sub_array);
    return max
}
const arr = [-2,3,4,-1,5,-12,6,1,3,2]
// const arr = [-2,-3,-4,-1,-5,-12,-6,-1,-3,-2]
const max_sum = maxSubArraySum(arr);
console.log("Max Sum is: ",max_sum);