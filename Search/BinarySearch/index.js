/*
==> Binary Search:
    -> Binary search works for sorted arrays.
    -> Binary search is a fast searching algorithm.
    -> This is a divide and conquer algorithm.
    -> T.C = O(log(n))
    -> Efficient Search algorithm to find desired result in sorted array 
    -> e.g. arr[] = {1,2,3,4,5,6,77,88} , int k=19;
    -> Loop will be run k = log(base2)(n)  -> T.C. O(log(base2)(n)) -> O(LogN)
*/
// Implementation of Binary search:
const arr = [1,2,3,4,5,6,7,8,9,10];
function binarySearch(arr,value){
    let start=0,end=arr.length-1;
    while(start <= end){
        const mid = Math.floor((start+end)/2);
        if(arr[mid] === value){
            return mid;
        }else if(arr[mid] > value){
            end = mid-1;
        }else{
            start = mid + 1; 
        }
    }
    return - 1;
}
const value = 9;
const index = binarySearch(arr,value);
if(index >= 0 ){
    console.log(`${value} found at index : ${index}`);
}else{
    console.log(`${value} does not exists in the array`);
}