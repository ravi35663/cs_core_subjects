/*
==> 💡 Inversion Count
    Given an array containing integers, you need to count the total number of inversions.
    Inversion: Two elements a[i] and  a[j] form an inversion if  a[i]>a[j] and  i<j.
    
    Sample Input: 
        [0,5,2,3,1] 
    Sample Output:
        5

*/

/*
    // Brute-Force Approach:
    function InversionCount(arr){
        let inversions = 0;
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(i < j && arr[i] > arr[j]){
                    inversions++;
                }
            }
        }
        return inversions;
    }

    const arr = [0,5,2,3,1];
    const res = InversionCount(arr);
    console.log("Inversions are: ",res);
*/



// Optimized Solution: Including merger Sort:
function InversionCount(arr){
    let temp = Array.from(arr);  
    const result = MergeSort(arr, temp, 0, arr.length - 1) 
    return result;
}

function MergeSort(arr,result,left=0,right=arr.length-1){
    let inversion = 0;
    if(left < right){
        let mid = Math.floor((left + right)/2);
        inversion += MergeSort(arr,result,left,mid);
        inversion += MergeSort(arr,result,mid+1,right);
        inversion += mergeSortedArray(arr,result,left,mid,right);
    }
    return inversion;
}

function mergeSortedArray(arr,result,left,mid,right){
    let i = left;     // Starting index for left subarray
    let j = mid + 1;  // Starting index for right subarray
    let k = left;     // Starting index to be sorted
    let inversion = 0;

    while(i<= mid && j<=right){
        if(arr[i] <= arr[j]){
            result[k++]= arr[i++];
        }else{
            result[k++] = arr[j++];
            inversion += ( mid - i + 1); 
        }
    }
    while(i<=mid){
        result[k++] = arr[i++];
    }
    while(j<=right){
        result[k++] = arr[j++]
    }
    // Copy the sorted array into original array:
    for(let i=left;i<=right;i++){
        arr[i] = result[i];
    }
    return inversion;
}

const arr = [0,5,2,3,1];
const res = InversionCount(arr)
console.log("Inversion count: ",res);