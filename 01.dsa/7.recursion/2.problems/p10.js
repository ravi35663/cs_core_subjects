/*
    Write a recursive function called capitalizeFirst. Given an array of strings, 
    capitalize the first letter of each string in the array.
    //capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
*/
// second
const capitalizeFirst = (arr)=>{
    const result_array = [];
    if(arr.length === 0){
        return result_array;
    }
    result_array.push((arr[0][0]).toUpperCase()+arr[0].slice(1));
    return result_array.concat(capitalizeFirst(arr.slice(1)));
}

// more optimised
function capitalizeWords(array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
  }

console.log(capitalizeFirst(['car','taco','banana']))
console.log(capitalizeFirst(['ravi','amit','sumit']))
console.log(capitalizeFirst(['universe','space','earth']))
console.log(capitalizeFirst(['sun','moon','jupiter']))

