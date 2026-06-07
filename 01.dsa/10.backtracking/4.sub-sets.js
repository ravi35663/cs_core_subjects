/*
    Finding Subsets:
        Given a string, find all subsets of the given string.
    Input
        abc
    Output
        ",a,b,c,ab,ac,bc,abc
*/
// // Without backtracking
// function generateSubsets(str,result=[""],i=0){
//     if(i == str.length){
//         return result;
//     }
//     let ch = str[i];
//     let temp = [];
//     result.forEach(item=>{
//         temp.push(item+ch)
//     });
//     result = [...result, ...temp];
//     return generateSubsets(str,result,i+1);
// }

// With backtracking:
function generateSubsets(input,output=[],i=0,j=0,result=[]){
    // Base case
    if(!input[i]){
        // console.log("Output is: ",output);
        result.push(output.join(''))
        return;
    }
    // Recursive case:
    // Include the  ith letter
    output[j] = input[i];
    generateSubsets(input, [...output], i+1, j+1,result);
    //Exclude the ith letter
    output[j] = ''
    generateSubsets(input,[...output],i+1,j,result);
    return result;
}

const str = 'abc';
console.log("Generated subsets are: ",generateSubsets(str));