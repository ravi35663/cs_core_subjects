/*
    Replace all spaces in a string with '%20'.
*/

const input = process.argv[2];
function replaceCharacter(str){
    let result = '';
    for(let i=0;i<str.length;i++){
        const item = str[i];
        if(item === ' '){
            result += '%20'
        }else{
            result+=item
        }
    }
    return result;
}

console.log("Result is : <><><><>: ",replaceCharacter(input));