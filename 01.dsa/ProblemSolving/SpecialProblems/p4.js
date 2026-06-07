/*
    Write a recursive function called flatten which accepts an array of arrays and 
    returns a new array with all values flattened.
    // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
    // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    // flatten([[1],[2],[3]]) // [1,2,3]
    // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/

function flatten(arr,temp_arr=[]){
    for(let i=0;i<arr.length;i++){
        let item = arr[i]
        if(item.constructor === Array){
            flatten(item,temp_arr)
        }else{
            temp_arr.push(item)
        }
    }
    return temp_arr;
}

// const arr = [1, 2, 3, [4, 5] ];
// const arr = [1, [2, [3, 4], [[5]]]]
// const arr = [[1],[2],[3]]
const arr = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];
const result = flatten(arr)
console.log("Result array is: ",result);