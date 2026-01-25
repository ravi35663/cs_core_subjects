/*
    Linear Search:
    -> finding an element in an array is known as linear search
    -> Time complexity of indexOf, findIndex, find and includes is O(N).
    -> Time Complexity of Linear search is O(N).
*/

const findItem = (arr,value)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i] === value){
            return i;
        }
    }
    return -1
}
console.log(findItem([10,1,3,90,22,1,5],90))
