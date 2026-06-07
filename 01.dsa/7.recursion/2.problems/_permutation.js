/*
    Permutations
    Given a string s, find all permutations of the string.

    Input
    abc

    Output
    abc, acb, bac, bca, cab, cba
*/


function generatePermutation(str){
    const result = [];
    permutation(str.length, str.split(''), 0, result);
    console.log("Result is: ", result);
}


function permutation(n, str, swap_index, result){
    // The dead end will be happens to each permuted string
    if(n-1 == swap_index){
        result.push([...str]);
        return;
    }
    for(let i=swap_index; i<n; i++){
        // swap_index
        [str[swap_index],str[i]] = [str[i],str[swap_index]];
        permutation(n, str, swap_index+1,result);
        // Backtracking to restore its original position
        [str[swap_index],str[i]] = [str[i],str[swap_index]];
    }
}

const str = "123";
const permutations = generatePermutation(str);