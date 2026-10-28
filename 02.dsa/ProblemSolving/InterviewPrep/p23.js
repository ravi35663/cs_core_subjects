/*
    Find the union of two arrays.
    Array 1: [1, 2, 3, 4, 5]
    Array 2: [3, 4, 5, 6, 7]

    Union: [1, 2, 3, 4, 5, 6, 7]
*/

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [3, 4, 5, 6, 7];
function unionOfTwoArray(arr1,arr2){
    const arr = [...arr1];
    arr2.forEach(item=>{
        if(!arr.includes(item)){
            arr.push(item);
        }
    })
    return arr;
}

const result = unionOfTwoArray(arr1,arr2);
console.log("Union of two array: ",result);