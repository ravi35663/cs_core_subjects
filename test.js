arr = [-2,3,4,-1,5,-12,6,1,3,2]
function maxSubArraySum(arr){
    let sum = 0;
    let max = -Infinity;
    for(let item of arr){
        sum +=item;
        if(sum > max){
            max = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    }
}