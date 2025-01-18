/*
    String Normalisation
    You are given a sentence with words separated by spaces.
    
    Your task is to:
    Write a function that returns a copy of this sentence where all the words: start with a capital letter 
    the rest of the letters are lower case

    Note:
    Your function should not modify the sentence given as argument.

    Sample Input
        This is SO MUCH FUN!

    Sample Output
        This Is So Much Fun!

*/

function normalisation(str){
    let copy = str.split(' ');
    copy.map(item=>{
        item = item[0].toUpperCase() + item.slice(1).toLowerCase();
        return item;
    })
    console.log("Copied string is: ",copy);
    console.log("Given string is: ",str);
}

const str = 'This is SO MUCH FUN!';
normalisation(str);