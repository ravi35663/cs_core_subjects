/*
    Write a function to check array is sorted:
    
    input: arr = [1,2,3,4,4,5]
    output: true

    input: [1,2,3,4,3,5,6];
    output: false
*/

// Without recursion:
// function arrayIsSorted(arr){
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i+1] - arr[i] < 0){
//             return false;
//         }
//     }
//     return true;
// }

// const arr = [1,2,3,4,5,6,7,8,9];
const arr = [1,2,3,2,5,6,7,8,9];
const output = arrayIsSorted(arr);
console.log(`Is array is sorted? ${output}`);

// With recursion:
function arrayIsSorted(arr, i=0){
    if(i == arr.length-1){
        return true;
    }
    if(arr[i+1] >= arr[i]){
        return arrayIsSorted(arr,i+1);
    }else{
        return false;
    }
}