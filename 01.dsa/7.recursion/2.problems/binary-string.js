/*
==> Binary Strings!
    You are given an integer N. Your task is to print all binary strings of size N without 
    consecutive ones.

    Constraints:
    N<=12
    Input Format:
        In the given function an integer N is passed as parameter.
    Output Format
        Return a vector of strings, with all possible strings in a sorted order.


    Sample Input
        3
    Sample Output
        000
        001
        010
        100
        101

*/


// All the solutions are brute-force-approach:
// With recursion:
function binaryString(n, i=0,output=[]){
    str = decimalToBinary(i++,n);
    if(str && str.length > n){
        return output;
    }
    if(str){
        output.push(str);
    }
    return binaryString(n, i,output);
}

function decimalToBinary(dec,n){
    let bin = '';
    let prev = '0';
    while(dec){
        const r = dec % 2;
        if(r == 1 && prev == 1 ){
            return;
        }
        prev = r;
        bin = `${r}${bin}`;
        dec = Math.floor(dec/2) 
    }
    if(n != bin.length){
        const m = n - bin.length;
        for(let i=0;i<m;i++){
            bin = `0${bin}`;
        }
    }
    return bin;
}


// Without recursion
// function binaryString(n){
//     const res = [];
//     let count = 0;
//     while(n){
//         const str = decimalToBinary(count++,n);
//         if(str){
//             if(str.length > n){
//                 return res;
//             }else{
//                 res.push(str);
//             }
//         }
//     }
// }


function decimalToBinary(dec,n){
    let bin = '';
    let prev = '0';
    while(dec){
        const r = dec % 2;
        if(r == 1 && prev == 1 ){
            return;
        }
        prev = r;
        bin = `${r}${bin}`;
        dec = Math.floor(dec/2) 
    }
    if(n != bin.length){
        const m = n - bin.length;
        for(let i=0;i<m;i++){
            bin = `0${bin}`;
        }
    }
    return bin;
}
// console.log("Binary strings are: ", binaryString(4))


/*
    Optimized solution:
*/

function binaryStrings(n, output='', result=[]){
    if(output.length > n){
        return;
    }
    if(output.length == n){
        // console.log("Output is: ",output);
        result.push(output);
        return;
    }
    if(output[output.length-1] != '1'){
        binaryStrings(n,output + '1',result);
    }
    binaryStrings(n,output + '0',result);
    return result;
}
console.log(binaryStrings(3))