/*
    Run Length Encoding
    
    Write a function to perform basic string compression using the counts of repeated characters, also known 
    as Run Length Encoding. 
    Let see one example, the input string "aaaabcccccaaa" would become "a4b1c5a3". 
    If the "compressed" string would not become smaller than the original string, your function should 
    return the input string. You can assume the string has only uppercase and lowercase letters. 
    You may use the to_string(int) method to convert an integer into string.


    Sample Inputs
        bbbaaaadexxxxxx
        abc
    
    Sample Outputs
        b3a4d1e1x6
        abc
*/

function compressString(str){
    let temp = '';
    let count = 0;
    for(let i=0;i<str.length;i++){
        
        count++;
        if(str[i] !== str[i+1]){
            temp = temp + str[i] + String(count);
            count = 0;
        }
    }
    if(temp.length > str.length){
        return str;
    }
    return temp;
}

const str = 'bbbaaaadexxxxxxp';
// const str = 'abc';
const output = compressString(str);
console.log("Output is: ",output);