/*
    Given an array of integers arr[]. Find the Inversion Count in the array.
    Two elements arr[i] and arr[j] form an inversion if arr[i] > arr[j] and i < j.

    Inversion Count: For an array, inversion count indicates how far (or close) the array is from being 
    sorted. If the array is already sorted then the inversion count is 0. If an array is sorted in the 
    reverse order then the inversion count is the maximum. 

    Examples:
    Input: arr[] = [2, 4, 1, 3, 5]
    Output: 3
    Explanation: The sequence 2, 4, 1, 3, 5 has three inversions (2, 1), (4, 1), (4, 3).
    Input: arr[] = [2, 3, 4, 5, 6]
    Output: 0
    Explanation: As the sequence is already sorted so there is no inversion count.
    Input: arr[] = [10, 10, 10]
    Output: 0
    Explanation: As all the elements of array are same, so there is no inversion count.
*/

// Brute-Force
function inversionCount(arr){
    // Check if array is sorted (ascending)
    const asc = isSorted(arr,true);
    if(asc){
        return 0;
    }
    // Check if array is sorted (Descending)
    const des  = isSorted(arr,false);
    if(des){
        return arr.length;
    }
    // Do merge sort with inversion
    let inversions = mergeSort(arr,Array.from(arr),0,arr.length-1)

}


// function mergeSort(arr,temp,left,right){
//     let inversions = 0;
//     if(left < right){
//         const mid = Math.floor((left + right)/2);
//         inversions += mergeSort(arr,temp,left,mid);
//         inversions += mergeSort(arr,temp,mid+1,right);
//         inversions += sortAndMergeArray(arr,temp,left,mid,right);
//     }
//     return inversions
// }

function isSorted(arr,isAscending){
    let i=0;
    if(isAscending){
        for(let i=0;i<arr.length - 1;i++){
            if(arr[i] - arr[i+1] > 0 ){
                return false;
            }
        }
        return true;
    }else{
        for(let i=0;i<arr.length - 1;i++){
            if(arr[i] - arr[i+1] < 0 ){
                return false;
            }
        }
        return true;
    }
}

const arr = [2, 4, 1, 3, 5];
console.log("Inversions are: ",inversionCount(arr));


/*
Note: it is not completed yet
*/