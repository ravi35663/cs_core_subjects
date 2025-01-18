/*
    Problem Description: Sort Strings

    Given a list of 'n' strings S0, S1, S2, ..., Sn-1, each consisting of digits and spaces, the number of 
    spaces is the same for each entry. 
    The goal is to implement a variation of a sort command. 
    1) None of the strings contains consecutive spaces. 
    2) Also, no string starts with a space nor ends with it. 
    3) Spaces are used to divide strings into columns, which can be used as keys in comparisons.

    The program has to support the required parameters:

    1) key: Integer denoting the column used as a key in comparisons. The left-most column is denoted by 1.
    2) reversed: Boolean variable indicating whether to reverse the result of comparisons.
    3) comparison-type: Either lexicographic or numeric.
    
    Lexicographic means that we use lexicographical order, where for example ('122' < '13').
    Numeric means that we compare the strings by their numerical values, so (13 < 122).
    If the comparison type is 'numeric' and the numeric values of keys of Si and Sj are equal for i < j, 
    then Si is considered strictly smaller than Sj because it comes first.

    Sample Input:
    3
    92 022  ==> s1
    82 12   ==> s2
    77 13   ==> s3
    2 false numeric   ==> key -> 2 (column), reverse -> false , comparison-type -> numberic


    Sample Output:
    82 12
    77 13
    92 022
*/

function stringKeySort(n,str,key,reverse,comparison){
    let obj = {};
    str = str.split('\n');
    let key_arr = [];
    str.forEach((item,index)=>{
        const splited_item = item.split(' ');
        obj[index] = splited_item;
        key_arr.push([index,splited_item[key-1]]);
    });
    if(comparison === 'numeric'){
        key_arr.sort((a,b)=>{
            Number(a[1]) - Number(b[1]);
        })
    }else{
        key_arr.sort((a,b)=>{
            if(a[1] > b[1]){
                return 1
            }else{
                return -1
            }
        })
    }
    if(reverse){
        for(let i=0;i<Math.floor(key_arr.length/2);i++){
            [key_arr[i],key_arr[key_arr.length-1-i]] = [key_arr[key_arr.length-1-i],key_arr[i]]
        }
    }
    str = '';
    for(let i=0;i<key_arr.length;i++){
        const index = key_arr[i][0];
        str += obj[index].join(' ') + '\n'; 
    }
    return str;
}
// [ [ 0, '12' ], [ 1, '13' ], [ 2, '022' ] ]

const n = 3;
const str = "82 12\n77 13\n92 022";
const key = 2 // column
const reverse = true;
const comparison = 'numeric';

const result = stringKeySort(n,str,key,reverse,comparison);
console.log(result);

