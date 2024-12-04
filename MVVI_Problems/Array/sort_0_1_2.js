/*
    Given an array arr[] containing only 0s, 1s, and 2s. Sort the array in ascending order.
    
    Examples:
    Input: arr[] = [0, 1, 2, 0, 1, 2]
    Output: [0, 0, 1, 1, 2, 2]
    Explanation: 0s 1s and 2s are segregated into ascending order.
    Input: arr[] = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]
    Output: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2]
    Explanation: 0s 1s and 2s are segregated into ascending order.
*/

function sortArray(arr){
    let ones = 0;
    let zeros = 0;
    let twos = 0;
    arr.forEach(item=>{
        if( item == 0){
            zeros++;
        } else if(item == 1){
            ones++
        }else{
            twos++;
        }
    });
    let i=0;
    for(;i<zeros;i++){
        arr[i] = 0;
    }
    for(;i<zeros + ones;i++){
        arr[i] = 1;
    }
    for(;i<zeros + ones + twos;i++){
        arr[i] = 2;
    }
    return arr;
}

const arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log("Sorted array is: ",sortArray(arr));