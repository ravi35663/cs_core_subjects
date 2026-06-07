// 
const mergeTwoArrays = (arr1,arr2)=>{
    let i=0;
    let j=0;
    let m = arr1.length;
    const n = arr2.length;
    const arr = [];
    // 
    while(i<m && j<n){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        }else{
            arr.push(arr2[j]);
            j++;
        }
    }
    // Appending remaining elements
    while(i < m){
        arr.push(arr1[i]);
        i++;
    }
    // Appending remaining elements
    while(j < n){
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}
// console.log("Merge two sorted arrays" ,mergeTwoArrays([10,11,17],[1,2,30]));

const mergeSort = (arr)=>{
    if(arr.length<=1){
        return arr;
    }
    let mid = Math.floor(arr.length/2)
    const leftSideArray = mergeSort(arr.slice(0,mid));
    const rightSideArray = mergeSort(arr.slice(mid));
    return mergeTwoArrays(leftSideArray,rightSideArray);
}

console.log("Merge sort ",mergeSort([10,11,1,2,5,6,90,1,17]))
console.log("Merge sort ",mergeSort([10,11,17,90,1,1,2,4,2,8,90,100,69]))