/*
    Write a recursive function called capitalizeWords. 
    Given an array of words, return a new array containing each word capitalized. 
    // let words = ['i', 'am', 'learning', 'recursion'];
    // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/
function capitalizedWords(arr,i=0){
    if(i === arr.length){
        return  arr;
    }
    arr[i] = arr[i].toUpperCase()
    return capitalizedWords(arr,i+1)
}

const words = ['i', 'am', 'learning', 'recursion']
const result_arr = capitalizedWords(words);
console.log("result_arr : ",result_arr)