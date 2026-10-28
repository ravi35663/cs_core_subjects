/*
    Maximum and minimum of an array using minimum number of comparisons:
        Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

    Input: arr[] = {3, 5, 4, 1, 9}
    Output: Minimum element is: 1
            Maximum element is: 9


    Input: arr[] = {22, 14, 8, 17, 35, 3}
    Output: Minimum element is: 3
            Maximum element is: 35
*/

function minAndMax(arr){
    let max = -Infinity;
    let min = Infinity;
    arr.forEach(item=>{
        if(min > item){
            min = item
        }
        if(max < item){
            max = item
        }
    });
    return {min,max};
}

const arr = [3, 5, 4, 1, 9];
const min_max = minAndMax(arr);
console.log("Min and max value is: ",min_max);