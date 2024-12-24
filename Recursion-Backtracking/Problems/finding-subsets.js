/*
    Finding Subsets
    Given a string, find all subsets of the given string.
    Input
        abc
    Output
        "", a, b, c, ab, ac, bc, abc
*/
/*
==> For N string the subset would be 2^n 
example:    n = 2 => subsets are 2^2 => 4
            n = 3 => subsets are 2^3 => 8
                    and so on.....
 

*/

/*
    Finding Subsets
    Given a string, find all subsets of the given string.
    Input
        abc
    Output
        "", a, b, c, ab, ac, bc, abc
*/
/*
==> For N string the subset would be 2^n 
example:    n = 2 => subsets are 2^2 => 4
            n = 3 => subsets are 2^3 => 8
                    and so on.....
 

*/

// Without Recursion:
function subSets(str){
    let output = [''];
    for(let i=0;i<str.length;i++){
        const ch = str[i]
        const newArray = [];
        output.forEach(item=>{
            newArray.push(item+ch);
        })
        output = [...output,...newArray];
    }
    return output;
}
const s = "abc";
console.log("Output is: ",subSets(str));

// Solve using recursion