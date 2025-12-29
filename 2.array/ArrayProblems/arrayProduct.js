/*
    Array Products:
    Implement a function that takes in a vector of integers, and returns a vector of the same length, where each 
    element in the output array is equal to the product of every other number in the input array. Solve this 
    problem without using division. In other words, the value at output[i] is equal to the product of every 
    number in the input array other than input[i]. You can assume that answer can be stored inside int datatype 
    and no-overflow will occur due to products.

    Sample Input
    Both inputs and outputs are vectors.

    {1,2,3,4,5}
    Sample Output

    {120, 60, 40, 30, 24}
*/

function arrayProduct(arr){
    const len = arr.length;
    // Make prefix array(product array)
    const prefix = new Array(len);
    prefix[0] = 1;
    for(let i=1;i<len;i++){
        prefix[i] = prefix[i-1] * arr[i-1];
    }
    // Make suffix array(product array)
    const suffix = new Array(len);
    suffix[len-1] = 1;
    for(let i=len-2;i>=0;i--){
        suffix[i] = suffix[i+1] * arr[i+1];
    }

    // make the result array and make the product of suffix and prefix to get product of the array
    const result = new Array(len);
    for(let i=0;i<len;i++){
        result[i] = prefix[i] * suffix[i];
    }
    return  result;
}

const arr =  [1,2,3,4,5]
console.log("Result is : ",arrayProduct(arr));