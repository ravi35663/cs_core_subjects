/*
    Implement quick-sort:
    Steps
        1: Pick pivot element (it can be any element in the range) 
        2: Move all elements which are less than pivot in left and other in right (partition part)
        3: Recursively sort the array
        4: if arr has 0 or 1 element, return the array;
*/

function pivotIndex(arr,start,end){
    let pi = end;
    let swap_index = start;
    for(let i=start;i<end;i++){
        if(arr[i] < arr[pi]){
            [arr[swap_index],arr[i]] =  [arr[i],arr[swap_index]];
            swap_index++;
        }
    }
    [arr[swap_index],arr[pi]] =  [arr[pi],arr[swap_index]];
    return swap_index;
}

function quickSort(arr,start=0, end=arr.length-1){
    if(start >= end){
        return;
    }
    const pi = pivotIndex(arr, start, end);
    quickSort(arr, start, pi-1);
    quickSort(arr, pi+1, end);
    return arr;
}

const arr = [10,5,2,0,7,6,4];
console.log("Sorted array is: ",quickSort(arr));