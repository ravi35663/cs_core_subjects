/*
    => Capitalize the first letter of each word in a sentence.
    input: hello world, this is ravi
    output: Hello World, This Is Ravi
*/

const input = process.argv[2];
function capitalizeWords(input){
    input = input.split(' ');
    return input.map(item=>{
        return item[0].toUpperCase() + item.slice(1);
    }).join(' ')
    // return input.join(' ');
}

console.log("Result is : ",capitalizeWords(input));