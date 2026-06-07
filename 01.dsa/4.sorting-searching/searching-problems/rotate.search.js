/*
===> Rotated Search:
    Write a function that takes input a sorted array of distinct integers, which is rotated about a 
    pivot point and finds the index of any given element.

    Sample Input: [7, 9, 10, 1, 2, 3, 4, 5, 6]
    element = 4

    Sample Output:
    6
*/

function rotateSearch(arr,key){
    let s = 0;
    let e = arr.length-1;
    while(s<=e){
        const mid = Math.floor((s+e)/2);
        
        // If we found the element at the correct index;
        if(arr[mid] === key){
            return mid;
        }

        // Case 1: 
        if(arr[s] <=arr[mid]){ // s to mid part is sorted
            // Left part of the array
            if(key >= arr[s] && key<=arr[mid]){ // if key present in sorted array
                e = mid-1;
            }else{
                s = mid+1
            }
        }else{
            // right part of the array
            if(key >= arr[mid] && key <=arr[e]){
                s = mid+1
            }else{
                e = mid-1;
            }

        }
    }
    return -1;
}

const arr = [7, 9, 10, 1, 2, 3, 4, 5, 6];
const key = 4;
const index = rotateSearch(arr,key);
console.log(`Element ${key} found at index: `,index)




