/*
===> Check Subsets
    Given two non-empty strings, write a function that determines whether the second string is subsequence 
    of the first one.

    Sample Input
        codingminutes
        cines

    Sample Output:
        true;
*/

// Correct method:
function checkSubset(str1,str2){
    let i=str1.length-1,j=str2.length-1;
    while( i>=0 && j>=0){
        if(str1[i] === str2[j]){
            i--;
            j--;
        }else{
            i--;
        }
    }
    if(j === -1){
        return true;
    }
    return false;
}

const s1 = 'codingminutes'
const s2 = 'cines';
const result = checkSubset(s1,s2);
console.log("Result is: ",result);