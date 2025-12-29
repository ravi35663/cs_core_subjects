/*
    ==> Mountain Problem:
    ->  Write a function that takes distinct integers, and return then length of the highest mountain.
    ->  A mountain in defined as adjacents that are strictly increasing untill they reach a peak, at which 
        they become strictly decreasing.
    ->  At least three numbers are required to form a mountain.

*/

function maxMountainWidth(arr){
    let max_width = 1;
    for(let i=1; i<arr.length;){
        // Find the peak
        if(arr[i] > arr[i-1]  &&  arr[i] > arr[i+1]){
            let width = 1;
            let bi = i;
            // Move backward direction
            while(bi > 0 && arr[bi] - arr[bi-1] >0){
                width++;
                bi--;
            }
            // Move backward direction
            while(i < arr.length - 1 && arr[i+1] - arr[i] < 0){
                width++;
                i++;
            }
            if(width > max_width){
                max_width = width;
            }
        }else{
            i++;
        }
    }
    return max_width;
}

const arr = [5,6,1,2,3,4,5,4,3,2,0,1,2,3,-2,4];
console.log("Max width is : ",maxMountainWidth(arr));
