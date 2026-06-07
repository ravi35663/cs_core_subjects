/*
    Rotate an array to the right by k steps.
    Array: [1, 2, 3, 4, 5, 6, 7]
    k: 3
    Rotated Array: [5, 6, 7, 1, 2, 3, 4]
*/
const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
function rotateArray(arr,k){
    const len = arr.length;
    k = k % len;
    while(k){
        const last_item = arr[len - 1];
        for(let i=len-1;i>0;i--){
            // swap items
            [arr[i],arr[i-1]] = [arr[i-1],arr[i]];
        }
        arr[0] = last_item;
        k--;
    }
    return arr;
}

const result = rotateArray(arr,k);
console.log("Rotated array is: ",result);
