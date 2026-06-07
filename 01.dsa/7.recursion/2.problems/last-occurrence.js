/*
    Write a function to find last occurrence of an element in the array:
*/


function lastOccurrence(arr, ele, n = arr.length){
    if(n == -1){
        return -1;
    }

    const index = lastOccurrence(arr.slice(1), ele, n-1);

    if(index != -1){
        return index + 1;
    }

    if(arr[0] == ele){
        return 0;
    }

    return -1
}


const ele = 500;
const arr = [30,10,30,40,50,60,70,80,10,90,10];
const index = lastOccurrence(arr,ele);
if(index == -1){
    console.log("Elements does not exists in the array");
}else{
    console.log("Element exist at index: ",index);
}

