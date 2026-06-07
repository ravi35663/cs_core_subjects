/*
    Write a recursive function called capitalizeFirst. Given an array of strings, 
    capitalize the first letter of each string in the array.
    //capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/

function capitalizeFirst(arr,i=0){
    if(i===arr.length){
        return arr;
    }
    item = (arr[i][0]).toUpperCase() + arr[i].slice(1)
    arr[i] = item;
    return capitalizeFirst(arr,i+1);
}
const arr = ['car','taco','banana']
const result_array = capitalizeFirst(arr);
console.log("Result array is : ",result_array)