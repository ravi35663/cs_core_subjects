/*
    Unique Substring:
    Given a string, write a function to find the largest substring with unique characters (no duplicates).

    Sample Input 
    prateekbhaiya
    aabcb

    Sample Output 
    ekbhaiy
    abc

*/

function uniqueSubString(str){
    let i=0,j=0,max_window_len=0,window_len = 0,start_window_len = -1,obj ={};
    while(j  < str.length){
        const ch = str[j];
        if(obj[ch]!=undefined && obj[ch] >=i){
            i = obj[ch] +1;
            window_len = j - i ;
        }
        obj[ch] = j;
        j++;
        window_len++;
        if(max_window_len < window_len){
            max_window_len = window_len;
            start_window_len = i;
        }
    }
    return str.slice(start_window_len,start_window_len+max_window_len);
}

// const s = "prateekbhaiya"
const s = 'abcabed'
const result = uniqueSubString(s);
console.log("Result is: ",result);