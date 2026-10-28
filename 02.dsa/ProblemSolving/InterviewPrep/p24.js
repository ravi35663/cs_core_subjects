/*
    Merge two sorted arrays into a single sorted array.
    Array 1: [1, 3, 5, 7]
    Array 2: [2, 4, 6, 8]

    Merged and Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8]
*/

const arr1 = [1, 3, 5, 7,10]
const arr2 = [2, 4, 6, 8]
function mergeSortedArray(arr1,arr2){
    // all variable declared as 'let'
    // this is multiple assignment of variables in a single line
    let j=0,i=0,m=arr1.length,n=arr2.length,arr=[];
    while(i<m && j<n){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        }else{
            arr.push(arr2[j]);
            j++;
        }
    }
    while(i<m){
        arr.push(arr1[i]);
        i++;
    }
    while(j<n){
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}

const result = mergeSortedArray(arr1,arr2);
console.log("Merged Sorted array: ",result);