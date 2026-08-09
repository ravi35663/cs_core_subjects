// Sort an array of strings based on their lengths.

const arr = ["Ravi Kumar Sharma","ravi",'amit','sumit','deepshree','rashmi','abhijeet'];
// Method - 1
// function sortArray(arr){
//     arr.forEach((item,index)=>{
//         for(let j=0;j<arr.length - index - 1;j++){
//             if(arr[j].length > arr[j+1].length){// Ascending order
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
//             }
//         }
//     })
//     return arr;
// }

// Method - 2
function sortArray(arr){
    return arr.sort((a,b)=>{
        if(a.length > b.length){
            return 1// 1 means greater
        }else{
            return -1 // -1 smaller
        }
    })
}
const result = sortArray(arr);
console.log("Sorted array: ",result);