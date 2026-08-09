/*
    Write a recursive function called capitalizeWords. 
    Given an array of words, return a new array containing each word capitalized. 
    // let words = ['i', 'am', 'learning', 'recursion'];
    // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

function capitalizedWords(arr){
    if(arr.length === 1){
        return arr[0].toUpperCase();
    }
    return [arr[0].toUpperCase()].concat(capitalizedWords(arr.slice(1)));
}
let words = ['i', 'am', 'learning', 'recursion',"from","udemy"];
const result_array = capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

// console.log("Result array : ",result_array.join(" "))
console.log("Result array : ",result_array)
