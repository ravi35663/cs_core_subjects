/*
    Warm Up - Search All!
    Implement a function that returns a list of all occurrences of a given  substring inside a big string.
    Return empty vector if smaller string is not present inside bigger string.

    Sample Input
    string bigString = "I liked the movie, acting in movie was great!";
    string smallString = "movie"

    Sample Output
    12, 29
*/


let word = "movie"
let words = "I watch movie, movie was great and i can watch movie a gain. movie."
function searchAll(words,word){
    let indexs = [];
    for(let i=0;i<=words.length-word.length;){
        let temp = words.slice(i,i+word.length);
        if(temp === word){
            indexs.push(i);
            i= i+word.length
        }else{
         i++;   
        }
    }
    return indexs;
}

const result = searchAll(words,word);
console.log("Result is: ",result);
