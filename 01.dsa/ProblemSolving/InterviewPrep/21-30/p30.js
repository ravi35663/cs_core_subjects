/*
    Implement binary search in an array.
    input: [1,2,3,4,5,6,7,8,9]
*/

function searchItem(arr,item){
    let start = 0,end = arr.length-1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid] == item){
            return mid;
        }
        else if(arr[mid] > item){
            end = mid-1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}
const item = 9;
const arr = [1,2,3,4,5,6,7,8,9];
const index = searchItem(arr,item);
if(index >= 0){
    console.log(`element ${item} found at index ${index}`);
}else{
    console.log("Element does not found");
}