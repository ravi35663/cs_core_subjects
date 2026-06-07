/*
Frequency Count
    Given a sorted array which can contain repeated elements, and an element K, we need to find the 
    frequency of a given element.

    Input Array: [0, 1, 1, 1, 1, 2, 2, 2, 3, 4, 4, 5, 10]
    Key = 2
    Output: 3
*/

function frequencyCount(arr,key){
    const u = upperBound(arr,key);
    const l = lowerBound(arr,key);
    // return l;
    return (u-l+1)
}

function lowerBound(arr,key){
    let start = 0;
    let end = arr.length-1;
    let index = -1;
    while(start <=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == key){
            // if(index === mid){
            //     return index;
            // }
            index = mid;
            end = mid-1
        }else if(arr[mid] > key){
            end = mid - 1;
        }else{
            start = mid+1;
        }
    }
    return index;
}

function upperBound(arr,key){
    let start = 0;
    let end = arr.length-1;
    let index = -1;
    while(start <=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == key){
            // if(index === mid){
            //     return index;
            // }
            index = start;
            start = mid+1;
        }else if(arr[mid] > key){
            end = mid - 1;
        }else{
            start = mid+1;
        }
    }
    return index;
}


const arr = [0, 1, 1, 1, 1, 2, 2, 2,2, 3, 4, 4, 5, 10];
const key  = 2;
const count = frequencyCount(arr,key);
console.log(`count of ${key} is ${count}`);