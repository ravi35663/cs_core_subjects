/*
    Find the longest word in a sentence.
*/

let input = process.argv[2];
console.log("Input element is : ",input);
input = input.split(' ');
let longest = ''
input.forEach((item,index)=>{
    if(longest.length < item.length){
        longest = item;
    }
})

console.log("Longest string in a sentence is : ",longest);