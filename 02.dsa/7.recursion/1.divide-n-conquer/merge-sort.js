/*
    Implement merge sort :
*/
function mergeSort(arr, start=0, end=arr.length-1){
    if(start >= end){
        return;
    }
    const mid = Math.floor((start+end)/2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid+1, end);
    return merge(arr,start,end);
}

function merge(arr,start,end){
    let i = start;
    const mid = Math.floor((start+end)/2);
    let j = mid+1;
    const result = [];
    while(i<=mid && j<=end){
        if(arr[i] <= arr[j]){
            result.push(arr[i++]);
        }else{
            result.push(arr[j++]);
        }
    }
    while(i<=mid){
        result.push(arr[i++]);
    }
    while(j<=end){
        result.push(arr[j++]);
    }
    console.log("Arr is: ",result)
    let count = 0;
    for(let i=start;i<=end;i++){
        arr[i] = result[count++];
    }
    return arr;
}


const arr = [0,9,2,7,6,0,6,1,5];
console.log("Sorted array is: ",mergeSort(arr));