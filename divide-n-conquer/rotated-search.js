/*
==> Rotated Search:
    Write a function that takes input a sorted array of distinct integers, which is rotated about 
    a pivot point and finds the index of any given element.
    
    Sample Input
        [7, 9, 10, 1, 2, 3, 4, 5, 6]
        element = 4

    Sample Output
        6
*/
// Brute-force: break the element into 2 parts and append them into single array:
/*
    Without recursion:
    Hits: 
        1) Find break point where array start in ascending order:
        2) index = (bp+)
*/

function searchElement(arr, ele){
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        const mid = Math.floor((start+end)/2);
        if(arr[mid] == ele){
            return mid;
        } else if(arr[mid] <= arr[end]){ // right part is sorted:
            if(ele > arr[mid] && ele <= arr[end]){
                start = mid + 1;
            }else{
                end = mid-1;
            }
        }else if(arr[start] <= arr[mid]){ // left part is sorted
            if(ele >= arr[start] && ele < arr[mid]){
                end = mid - 1;
            }else{
                start = mid + 1;
            }
        }
    }
    return -1;
}

const arr = [7, 9, 10, 1, 2, 3, 4, 5, 6];
const ele = 4
// const arr = [4,5,6,7,0,1,2];
// const ele = 3;
console.log("Sorted array: ",[1,2,3,4,5,6,7,8,9,10])
console.log("Element is: ",searchElement(arr,ele));