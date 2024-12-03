/*
    Given an array arr[] and an integer k where k is smaller than the size of the array, the task is to find 
    the kth smallest element in the given array.

    Follow up: Don't solve it using the inbuilt sort function.
    Examples :
        Input: arr[] = [7, 10, 4, 3, 20, 15], k = 3
        Output:  7
        Explanation: 3rd smallest element in the given array is 7.
        Input: arr[] = [2, 3, 1, 20, 15], k = 4 
        Output: 15
        Explanation: 4th smallest element in the given array is 15.
        Expected Time Complexity: O( n + (max_element) )
        Expected Auxiliary Space: O (max_element)
        Constraints:
        1 <= arr.size <= 106
        1<= arr[i] <= 106
        1 <= k <= n
*/

function kthSmallestElement(arr,k){
    const sortedArray = mergeSort(arr);
    return sortedArray[k-1];
}

const mergeSortedArray= (arr1,arr2)=>{
    let i = 0,j=0,m=arr1.length, n=arr2.length;
    const result = [];
    while(i<m && j< n){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i++]);
        }else{
            result.push(arr2[j++]);
        }
    }
    while(i<m){
        result.push(arr1[i++]);
    }
    while(j<n){
        result.push(arr2[j++])
    }
    return result;
}

const mergeSort = (arr)=>{
    if(arr.length <= 1){
        return arr;
    }
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    return mergeSortedArray(left,right);
}

const arr = [7, 10, 4, 3, 20, 15], k = 3;
console.log(`${k}th smallest element is: `,kthSmallestElement(arr,k));