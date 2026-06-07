/*
    Find the first non-repeating character in a string.
    Input: "swiss"
    Output: w is first non-reaping element 
*/

const input = process.argv[2];

function nonRepeatingItem(str){
    for(let i=0;i<str.length;i++){
        const item = str[i];
        let count = 0;
        for(let j=0;j<str.length;j++){
            if(str[j] === item){
                count++;
            }
        }
        if(count == 1){
            return item;
        }
    }
    return "No non-repeating item is there";
}

console.log("Result: <><><>: ",nonRepeatingItem(input));