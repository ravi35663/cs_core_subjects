/*
    DNF Algorithm:
        The DNF (Dutch National Flag) Algorithm is an efficient algorithm designed to solve problems 
        where an array or collection contains three distinct types of elements that need to be segregated. 
        It was proposed by Edsger Dijkstra and is commonly used in scenarios like sorting arrays with 
        0s, 1s, and 2s or partitioning data into three regions.
*/

/*
    Key Concepts
        1) The array is divided into three sections:
            Low Section: Contains the first type (e.g., 0s).
            Middle Section: Contains the second type (e.g., 1s).
            High Section: Contains the third type (e.g., 2s).
            
        2) Three pointers are used:
            Low: Tracks the boundary for the first type.
            High: Tracks the boundary for the third type.
            Mid: Scans through the array.
*/

/*
    Algorithm Steps:
    1) Initialize Pointers:
        low = 0, mid = 0, high = n - 1 (where n is the array length).
    
    2) Loop Until mid <= high:
        Case 1: If the element at mid belongs to the first category:
            Swap it with the element at low.
            Increment low and mid.
        
        Case 2: If the element at mid belongs to the second category:
            Simply move mid forward.
        
        Case 3: If the element at mid belongs to the third category:
            Swap it with the element at high.
            Decrement high.
*/

// function DNF_Algorithm(arr){
//     let low = 0,mid = 0, high = arr.length - 1;
//     const first = 0, second = 1,third = 2;
//     while(mid<=high){
//         if(arr[mid] === first){
//             [arr[mid],arr[low]] = [arr[low],arr[mid]];
//             low++;
//             mid++
//         } else if(arr[mid] === second){
//             mid++;
//         }else{
//             [arr[mid],arr[high]] = [arr[high],arr[mid]];
//             high--;
//         }
//     }
//     return arr;
// }

// DutchNationalFlag algorithm used to sort an array which have three types of elements present:


function DNF_Algorithm(arr){
    const first = 0, second = 1, third = 2;
    let low = 0, high = arr.length-1, mid = 0;
    while(mid<=high){
        if(arr[mid] == first){
            [arr[mid],arr[low]] = [arr[low],arr[low]];
            low++;
            mid++
        }else if(arr[mid] == third){
            [arr[mid],arr[high]] = [arr[high],arr[mid]];
            high--;
        }else{
            mid++;
        }
    }
}

const arr = [0, 0, 1, 2, 0, 1, 2, 0];
DNF_Algorithm(arr)
console.log("DNFAlgorithm: ", arr);