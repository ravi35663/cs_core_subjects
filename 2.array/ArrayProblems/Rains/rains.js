/*
    Given a non-negative integers representing an elevation map where the width of each bar is 1, 
    compute how much water it can trap after raining.
*/

function totalRainTrap(arr){
    const len  = arr.length;
    // For no trap;
    if(len <=2){
        return 0
    }
    let leftArr = new Array(len);
    let rightArr = new Array(len);
    let left = arr[0],right=arr[len-1];
    for(let i=0;i<len;i++){
        if(left < arr[i]){
            left = arr[i];
        }
        if(right < arr[len-1-i]){
            right = arr[len-1-i];
        }
        leftArr[i] = left;
        rightArr[len-i-1] = right;
    }
    let count = 0;
    for(let i=0;i<len;i++){
        const min = (leftArr[i] < rightArr[i] ? leftArr[i] : rightArr[i]) - arr[i];
        count += min;
    }
    return count;
}

const arr = [0,1,0,2,1,0,1,3,2,1,2,1];

const result = totalRainTrap(arr);
console.log("Result is: ",result); // 6