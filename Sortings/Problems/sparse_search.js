/*
    Sparse Search:
    Given a sorted array of strings that is interspersed with empty strings, write a method to find the 
    location of a given string.
    Input
        arr = ["ai", "", "", "bat", "", "", "car", "cat", "", "", "dog", ""]
        item = bat

    Output
        4
*/

// Brute-Force:
// function sparseSearch(arr,key){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] == key){
//             return i + 1
//         }
//     }
//     return -1;
// }

// Optimized solution (Binary Search (Modified Binary search))
function sparseSearch(arr,key){
    let start = 0;
    let end = arr.length-1;
    let mid = Math.floor((start+end)/2);
    while(start <= end){
        if(arr[mid] != ''){
            if(arr[mid] == key){
                return mid + 1;
            }else if(arr[mid] > key){
                end = mid - 1;
            }else{
                start = mid + 1
            }
            mid = Math.floor((start+end)/2);
        }else{
            // Move left and right side
            let temp_mid = mid;
            let temp_mid_1 = mid;
            while((temp_mid >=0 && arr[temp_mid] == '') && (temp_mid_1 <= end && arr[temp_mid_1] == '')){
                temp_mid--;
                temp_mid_1++;
            }
            if(arr[temp_mid] === ''){
                mid = temp_mid_1; 
            }else{
                mid = temp_mid; 
            }
        }
    }
}

const arr = ["ai", "", "", "bat", "", "", "car", "cat", "", "", "dog", ""]
const item = "ai";
const result = sparseSearch(arr,item);
if(result<0){
    console.log(`${item} item does not exists:`);
}else{
    console.log(`${item} present at ${result}`);
}