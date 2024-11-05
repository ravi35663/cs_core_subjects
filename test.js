/*
    :Inversion Count:
    
    Given an array containing integers, you need to count the total number of inversions.
    Inversion: Two elements a[i] and a[j] form an inversion if a[i]>a[j] and i<j.

    Sample input:
    [0,5,2,3,1]

    Sample Output:
    5
*/

// Brute-Force approach:
function countInversion(arr){
    let count = 0
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]> arr[j] && j > i){
                count++;
            }
        }
    }
    return count;
}

// Optimized Solution:
// function merged

const arr = [0,5,2,3,1];
const inversion = countInversion(arr);
console.log("Inversion count is: ",inversion);