/*
=> Merge Sort: - 
    ->  Merge sort is combination of two thing: merging and sorting
    ->  Merge sort is an example of divide and conquer approach
    ->  Exploits the fact that arrays of 0 and 1 element are always sorted
    ->  Works by decomposing an array into smaller arrays of 0 or 1 elements, then 
        build up newly sorted array.
    -> example : -
	    How does merge sort work? 
            arr = [8,3,5,4,7,6,1,2]
            Step1: divide array into two parts: [8,3,5,4] & [7,6,1,2] and again divide arrays into
                    two parts unless they are not broken into 1 element or 0 element array.
            -> [8,3] [5,4] [7,6] [1,2]
            -> [8] [3] [5] [4] [7] [6] [1] [2]
            Sort Arrays and merge them
            --> [3,8]  [4,5] [6,7] [1,2]
            --> Compare array elements and merge them
            --> [3,4,5,8]  & [1,2,6,7]
            Finally 
            -> [1,2,3,4,5,6,7,8]
*/

/*
Note:
    -> log(n) decomposition of the array.
    -> n comparison per decomposition of the array. Hence T.C is (n Log(n)) 
    -> Space complexity is O(N) because we are introducing a new array.
*/

//Merger sorted array
function mergeSortedArray(arr1,arr2){
    let i=0,j=0,m=arr1.length,n=arr2.length,arr=[];
    while(i<m && j<n){
        if(arr1[i]<arr2[j]){
            arr.push(arr1[i]);
            i++;
        }else{
            arr.push(arr2[j]);
            j++
        }
    }
    while(i<m){
        arr.push(arr1[i]);
        i++
    }
    while(j<n){
        arr.push(arr2[j]);
        j++
    }
    return arr;
}

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return mergeSortedArray(left,right);
}

const arr = [8,3,5,4,7,6,1,2];
const result = mergeSort(arr);
console.log("Sorted array is : ",result);