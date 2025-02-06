/*
    Write a function to find first occurrence of an element in the array:
*/

function firstOccurrence(arr,ele,i=0){
    if(i == arr.length){
        return -1;
    }
    if(arr[i] == ele){
        return i;
    }
    return firstOccurrence(arr,ele,i+1);
}

const ele = 10;
const arr = [10,20,30,40,50,60,70,80,,90];
const index = firstOccurrence(arr,ele);
if(index == -1){
    console.log("Elements does not exists in the array");
}else{
    console.log("Element exist at index: ",index);
}