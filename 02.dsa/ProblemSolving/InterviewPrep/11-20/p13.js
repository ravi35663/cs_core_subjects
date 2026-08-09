/*
    Reverse a sentence word by word.
    Input: = "The quick brown fox jumps over the lazy dog"
    Output: = "dog lazy the over jumps fox brown quick The"
*/

let sentence = process.argv[2];
function reverseSentence(input){
    input = input.split(' ');
    // input = input.map(item=>{
    //     let temp_item = '';
    //     for(let i=item.length-1;i>=0;i--){
    //         temp_item+=item[i];
    //     }
    //     return temp_item;
    // })
    let input_len = input.length;
    let half_len = Math.floor(input.length/2);
    for(let i=0;i<half_len;i++){
        /*
            Traditional way
            let temp  = input[i];
            input[i] = input[input_len-i-1];
            input[input_len-i-1] = temp
        */ 
       [input[i],input[input_len-i-1]] = [input[input_len-i-1],input[i]];
    }
    return input.join(' ');
}

const result = reverseSentence(sentence);
console.log("Result is : ",result);