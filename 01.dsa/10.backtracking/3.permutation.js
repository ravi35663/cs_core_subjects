/*
    Permutations
        Given a string s, find all permutations of the string.

    Input:
        abc
    Output:
        abc, acb, bac, bca, cab, cba
*/

function permutation(str,swap_index=0){
    //Base case
    if(swap_index == str.length){
        console.log("str: ",str.join(''));
        return;
    }
    // Recursion case
    for(let i=swap_index;i<str.length;i++){
        [str[i],str[swap_index]] = [str[swap_index],str[i]];
        permutation(str,swap_index+1);
        // Backtrack
        [str[i],str[swap_index]] = [str[swap_index],str[i]];
    }
    return;
}

const str = ['a','b','c'];
permutation(str);