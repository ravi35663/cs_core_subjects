/*
    You're given a list of n strings a1,a2,a3,....an. You'd like to concatenate them together in some order 
    such that the resulting string would be lexicographically smallest.
    Given the list of strings, output the lexicographically smallest concatenation.


    Sample Input:
        3
        c
        cb
        cba
    Sample output:
        cbacbc
    
    Sample input:
        a
        ab
        aba
    Sample output:
        aabaab
*/

function smallestString(arr){
    arr.sort((a,b)=>{
        let x = a + b;
        let y = b + a;
        if(x < y){
            return -1
        }else{
            return 1;
        }
    })
    return arr.join('')
    // let sum = "";
    // arr.forEach(item=>{
    //     sum +=item;
    // })
    // return sum;
}

const arr = ['a','ab','aba'];
// const arr = ['c','cb','cba'];
console.log(smallestString(arr));