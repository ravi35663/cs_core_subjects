/**
 * [5,3,4,1,2,0,7,-4]
 * 
 * 
*/

const insertionSort = (arr)=>{
    let count = 0;
    for(let i=1;i<arr.length;i++){
        let currentValue = arr[i];
        // find index where to insert current value
        for(let j=i-1 ;arr[j]>currentValue && j>=0; j--){
            console.log("count",count++);
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
    return arr;
}
const array0 = [5,3,4,1,2,0,7,-4];
const array1 = [25, 17, 8, 32, 45, 11, 37, 22, 9, 28];
const array2 = [12, 27, 6, -38, 21, 7, 30, 19, 9, 32];
const array4 = [29, 14, 32, 10, 0, 7, 41, 19,  -26, 16];
const array3 = [43, 9, 1, 18, 0, -16, 24];
const array5 = [17, 0, 12, 28, 8, 39, -25, 16, 6, 33, -21, 14, 27];
const array6 = [8, 32, 0, 5, 36, 12, 29, 30, 19, 6, 38, 11, 33];
const array7 = [18, 6, -33, 27, 10, 21, 12, -19, 0, 42];
const array8 = [30, 14, 8, 21, - 31, 22, 11, -42];
const array9 = [9, 28, 15, -7, 32, 12, 0, 5, -38, 2, 44];
const array10 = [6, 0, 15, 9, -28, 14,-30, 18, 5];

console.log(`Current Array: ${array0} and sorted array: ${insertionSort(array0)}`);
// console.log(`Current Array: ${array1} and sorted array: ${insertionSort(array1)}`);
// console.log(`Current Array: ${array2} and sorted array: ${insertionSort(array2)}`);
// console.log(`Current Array: ${array3} and sorted array: ${insertionSort(array3)}`);
// console.log(`Current Array: ${array4} and sorted array: ${insertionSort(array4)}`);
// console.log(`Current Array: ${array5} and sorted array: ${insertionSort(array5)}`);
// console.log(`Current Array: ${array6} and sorted array: ${insertionSort(array6)}`);
// console.log(`Current Array: ${array7} and sorted array: ${insertionSort(array7)}`);
// console.log(`Current Array: ${array8} and sorted array: ${insertionSort(array8)}`);
// console.log(`Current Array: ${array9} and sorted array: ${insertionSort(array9)}`);
// console.log(`Current Array: ${array10} and sorted array: ${insertionSort(array10)}`);