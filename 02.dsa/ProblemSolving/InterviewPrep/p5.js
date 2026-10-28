/*
    Write a recursive function called capitalizeFirst. Given an array of strings, 
    capitalize the first letter of each string in the array.
    //capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/
function capitalizeFirst(arr){
    let result_array = [];
    if(arr.length === 1){
        return (arr[0][0]).toUpperCase() + arr[0].slice(1);
    }
    result_array.push((arr[0][0]).toUpperCase() + arr[0].slice(1))
    return result_array.concat(capitalizeFirst(arr.slice(1)));
}

const arr = ['car','taco','banana'];
console.log("Capitalized first : ",capitalizeFirst(arr));