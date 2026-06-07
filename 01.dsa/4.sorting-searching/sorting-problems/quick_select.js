/*
    QuickSelect:
        Write a function that takes input an array of distinct integers, and returns the k-th 
        smallest in the array.
        
        Sample Input:
            arr = [10,5,2,0,7,6,4] 
            k  = 4
        Sample Output: 
            5
*/

// Using Sorting algorithm
function QuickSelect(arr,k){
    const sorted_array = quickSort(arr,0,arr.length,k-1)
    return sorted_array;
}

function quickSort(arr,left,right,k){
    if(left < right){
        let pi = findPivotIndex(arr,left,right);
        console.log("Pivot ele: ",pi);
        if(pi === k ){
            // Found
            return arr[pi];
        }else if( pi > k){
            // if true run this part and discard other part
            return quickSort(arr,left,pi,k);
        }else{
            // if true run this part and discard other part
            return quickSort(arr,pi+1,right,k);
        }
    }
    return -1;
    // return arr;
}

function findPivotIndex(arr,left,right){
    let start = left;
    let pi = left;
    for(let i=left + 1; i<right;i++){
        if(arr[start] > arr[i]){
            pi++;
            [arr[pi],arr[i]] = [arr[i],arr[pi]];
        }
    }
    // console.log("Pivot elements: ",{arr,pi,start});
    [arr[pi],arr[start]] = [arr[start],arr[pi]];
    return pi;
}

const arr = [10,5,2,0,7,6,4] 
const k  = 4;
const result = QuickSelect(arr,k);
console.log(`${k}th smallest element is ${result}`)

