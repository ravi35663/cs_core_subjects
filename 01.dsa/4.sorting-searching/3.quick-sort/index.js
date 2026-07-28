/*
=> Quick Sort:
    ->  Quick sort is like merge sort, exploiting the fact that arrays of 0 or 1 element are always sorted.
    ->  Time Complexity is T.C: O(NlogN) and S.C: O(1)
    ->  Work by selecting one element (Called pivot element) and finding the index where the pivot should 
        end up in the sorted array. 
        
        i.e. One side of the array of pivot elements is less than the pivot element and other side elements 
        are greater than the pivot element.

    ->  Once the pivot is positioned appropriately, quick sort is applied either side of the pivot.
    ->  You can pick any element as a pivot element.
    ->  arr = [3,9,0,7,1]
    ->  Find pivot index:
    ->  1st iteration => [3,9,0,7,1] => Start iteration from index 1(because we have 
        choose 3 as pivot element) => [3,9,0,7,1]
    ->  2nd Iteration => index 2 => [3,9,0,7,1] => [3,0,9,7,1]
    ->  3nd Iteration => index 3 => [3,9,0,7,1] => [3,0,9,7,1]
    ->  4th Iteration => index 4 => [3,9,0,7,1] => [3,0,1,7,9]
    ->  final swap pivot element with pivot index => P.I= 2 => [3,0,1,7,9] => [1,0,3,7,9]
    ->  Here 3 the pivot element is at a sorted position and we need to repeat this until all pivot 
        elements are sorted.
*/

// This function is responsible placing each element at correct position:
const pivotElementIndex = (arr, start=0, end=arr.length-1)=>{
    let pivot_index = start;
    let pivot_ele = arr[start];
    for(let i=start+1 ; i<=end;i++){
        // By doing below thing we're finding exact place of pivot element so that we can place pivot element there
        if(pivot_ele > arr[i]){
            pivot_index++;
            [arr[pivot_index],arr[i]] = [arr[i],arr[pivot_index]];
        }
    }
    // Here we get the exact place of pivot element and we're placing pivot element there.
    [arr[pivot_index],arr[start]] = [arr[start],arr[pivot_index]]
    return pivot_index;
}

const quickSort = (arr, left = 0, right = arr.length-1) => {
    if(left < right){
        let pivotIndex = pivotElementIndex(arr,left,right);
        quickSort(arr, left, pivotIndex-1);
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}
const ar = [3,7,2,-1,4,1,5,2,12,8,9];
console.log(quickSort(ar));