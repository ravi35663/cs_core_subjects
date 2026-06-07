/*
    Write a recursive function called flatten which accepts an array of arrays and returns
    a new array with all values.
    // flatten([1, 2, 3, [4, 5] ]) // [1, 4, 9, [16, 25] ]
    // flatten([1, [2, [3, 4], [[5]]]]) // [1, [4, [9, 16], [[25]]]]
*/


function mapArray(arr){
    let mapped_array = [];
    for(let i=0;i<arr.length;i++){
        const item = arr[i];
        if(item.constructor === Array){
            mapped_array.push(mapArray(item));
        }else{
            mapped_array.push(item * item);
        }
    }
    return mapped_array;
}

const arr = [1,2,[3,4,[5,6]],7];
console.log("MappedArray: ",mapArray(arr));