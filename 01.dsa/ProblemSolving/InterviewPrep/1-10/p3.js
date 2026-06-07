/*
    Write a recursive function called flatten which accepts an array of arrays and returns
    a new array with all values flattened.
    // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
    // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    // flatten([[1],[2],[3]]) // [1,2,3]
    // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/

function flatten(arr){
    let result_arr = [];
    for(let i=0;i<arr.length;i++){
        let item = arr[i];
        if(item.constructor === Array){
            result_arr = result_arr.concat(flatten(item))
        }else{
            result_arr.push(item);
        }
    }
    return result_arr;
}

// const arr = [1,2,[3,4,[5,6]],7,8,9,[10]];
const arr = [1,2,[3,4,[5,6]],7];
console.log("flatten array is : ",flatten(arr));