/*
    You are given a string, you need to print all subsequences of the string sorted by length and 
    lexicographic order if length is the same.

    Sample Input:
        abcd

    Sample Output:
        '',a, b, c, d, ab, ac, ad, bc, bd, cd, abc, abd, acd, bcd, abcd

*/

/*
    Length of the string is n then subsequence of the string is 2^n .
*/

function subsequence(input,output,arr){
    // Base-case
    if(input.length === 0){
        arr.push(output);
        return arr;
    }

    // Recursion call
    let item = input[0];
    let reduced_input = input.slice(1);
    //Add item in output
    subsequence(reduced_input,output+item,arr);
    // Leave output as it is
    subsequence(reduced_input,output,arr);
}


function sortedSubstrings(str){
    let arr = [];
    let output = '';
    const result = subsequence(str,output,arr);
    console.log("Result is : ",result);
}

const str = "abcd"
sortedSubstrings(str);