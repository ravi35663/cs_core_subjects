// Bubble-Sort:

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

const arr = [1,9,12,2,3,43,56,90,4,5,6];
console.log("Sorted array is: ",bubbleSort(arr));