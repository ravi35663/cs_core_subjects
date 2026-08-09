
let arr = process.argv[2];
arr = arr.split(' ').map(item=> Number(item))
console.log("Input array is : ",arr)
function productOfArray(arr){
    if(arr.length==0){
        return 1
    }
    return arr[0] * productOfArray(arr.slice(1))
}

const product = productOfArray(arr);
console.log("Product of numbers in the array is : ",product);