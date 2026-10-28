/*
    Find the intersection of two arrays.
    arr1 = [1, 2, 3, 4, 5]
    arr2 = [3, 4, 5, 6, 7]
    Intersection: [3, 4, 5]
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];

function intersectionOfTwoArray(arr1,arr2){
    const arr = [];
    arr1.forEach(item=>{
        if(arr2.includes(item)){
            arr.push(item)
        }
    })
    return arr;
}

const result = intersectionOfTwoArray(arr1,arr2);
console.log("Intersection of two array is: ",result);