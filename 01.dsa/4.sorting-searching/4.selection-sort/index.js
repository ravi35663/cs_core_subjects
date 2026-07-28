/*
=> Selection Sort: -
    ->  It is similar to bubble sort but instead of placing large values at sorted position it places 
        small values at sorted positions(first place).

    ->  We pick minimum elements in the array and put that minimum element at the starting of the array and 
        we repeat these steps until all the sorted elements are sorted.
        
    -> Example: 
            arr =  [4,1,5,7,8,0]
            1st -> [0,1,5,7,8,4]
            2nd -> [0,1,4,7,8,5]
            3rd -> [0,1,4,5,8,7]
            4th -> [0,1,4,5,7,8]  
    ->  Time Complexity of Selection Sort. T.C = O(n^2) (n square)
    ->  Selection sort is better than bubble sort because here it minimizes swaps.
        In bubble sort we swap over and over and selection sort reduces this swapping.

*/

function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let index = i;
        for(let j= i+1;j<arr.length;j++){
            if(arr[j] < arr[index]){
                index = j;
            }
        }
        if(index !==i){
            [arr[i],arr[index]] = [arr[index],arr[i]];
        }
    }
    return arr;
}

const arr = [4,1,5,7,8,0];
console.log("Result array is : ",selectionSort(arr));