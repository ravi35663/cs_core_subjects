/*
    ==> Implement bubble sort by recursion:
    input:
        arr = [5,4,3,2,1];
    output:
        [1,2,3,4,5]
*/

function bubbleSort(arr,i=0){
    // base case
    if(arr.length == i){
        return arr;
    } 
    // You can also reduce this loop into recursion
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j] > arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
    // recursion case: 
    return bubbleSort(arr,i+1);
}


const arr = [5,4,3,2,1];
console.log("Sorted array is: ",bubbleSort(arr));