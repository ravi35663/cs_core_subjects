/*
    find longest unique sub-string in a string
*/
// It's wrong solution , solve it agian with sliding window approach
const longestSubString = (str)=>{
    let larg = str[0];
    let temp = str[0];
    for(let i=0;i<str.length-1;i++){
        if(str[i].charCodeAt(0)-str[i+1].charCodeAt(0) != 0){
            temp += str[i+1];
        }else{
            if(temp.length > larg.length){
                larg = temp;
            }
            temp = str[i+1];
        }
    }
    if(str[str.length-2].charCodeAt(0)-str[str.length-2].charCodeAt(0) != 0){
        temp += str[str.length-1];
    }
    if(temp.length > larg.length){
        larg = temp;
    }
    console.log('Longest unique sub-string',larg);
}

longestSubString('hellothere');