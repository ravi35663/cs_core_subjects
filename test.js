/*
    Permutations
        Given a string s, find all permutations of the string.

    Input:
        abc
    Output:
        abc, acb, bac, bca, cab, cba
*/

function permutation(arr, swap_index=0){
    if(arr.length == swap_index){
        console.log("Permutations: ",arr);
        return;
    }
    for(let i=swap_index; i<arr.length; i++){
        [arr[i], arr[swap_index]] = [arr[swap_index], arr[i]];
        permutation(arr, swap_index + 1);
        [arr[i], arr[swap_index]] = [arr[swap_index], arr[i]];
    }
    return;
}


const arr = [..."abc"];
console.log("Arr is: ",arr);
permutation(arr);

