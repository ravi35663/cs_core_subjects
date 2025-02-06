/*
    Write a recursive function called flatten which accepts an array of arrays and returns
    a new array with all values flattened.
    // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
    // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
    // flatten([[1],[2],[3]]) // [1,2,3]
    // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
*/
// My solution
const flatten = (arr)=>{
    arr = String(arr);
    let result_array = [];
    if(arr.length === 0) {
        return result_array;
    }
    if(arr[0] !== ','){
        result_array.push(Number(arr[0]));
    }
    return result_array.concat(flatten(arr.slice(1)));
}
// Copied solution (this one is correct and efficient )
function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
}

console.log(flatten([[1],[2],[3]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));