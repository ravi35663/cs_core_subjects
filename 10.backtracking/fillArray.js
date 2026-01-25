/*

*/

function fillArray(arr,i=0){
    if(i == arr.length){
        console.log("Arr in base case: ",arr)
        return ;
    }
    arr[i] = i+1;
    fillArray(arr,i+1);
    // Backtracking (Coming back from the base case)
    // Backtracing always used after function call
    arr[i] = arr[i] * -1
}

const arr = new Array(5).fill(0);
fillArray(arr);
console.log("Array is: ",arr);