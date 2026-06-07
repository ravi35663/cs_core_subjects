/*
    Write a recursive function called capitalizeWords. 
    Given an array of words, return a new array containing each word capitalized. 
    // let words = ['i', 'am', 'learning', 'recursion'];
    // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
*/

// const capitalizedWords = (works)=>{
//     let temp_array = [];
//     if(works.length === 0){
//         return temp_array;
//     }
//     temp_array.push(works[0].toUpperCase());
//     return temp_array = temp_array.concat(capitalizedWords(works.slice(1)));
// }

function capitalizedWords(arr){
    if(n===arr.length){
        return arr
    }

    arr[n] = arr[n].toUpperCase();
    return capitalizedWords(arr,n+1);
}
// This one is more optimised

function capitalizeFirst (array) {
    if (array.length === 1) {
      return [array[0][0].toUpperCase() + array[0].substr(1)];
    }
    const res = capitalizeFirst(array.slice(0, -1));
    const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
    res.push(string);
    return res;
}

console.log(capitalizedWords(['i', 'am', 'learning', 'recursion']))
console.log(capitalizedWords(['delhi', 'is', 'in', 'india']));
console.log(capitalizedWords(['england', 'is', 'better', 'county','to','live']))
console.log(capitalizedWords(['i', 'will', 'work', 'at','google','in','india','as','software','engineer']));


