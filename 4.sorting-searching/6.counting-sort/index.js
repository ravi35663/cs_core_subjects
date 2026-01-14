/*
    Counting sort:
    -> if elements in the array in the range then use counting sort
    -> Example:
        arr = [5,3,4,1,2,1,2]
        here max  =  5;
        freq_arr = [0,2,2,1,1,1,0,0] ==> count of each v
        then arr = [1,1,2,2,3,4,5]
*/

// Lets assume collection of array are sorted
function countingSort(arr){
    // find the maximum value of array
    let max = arr[0];
    arr.forEach(item=>{
        if(max < item){
            max = item;
        }
    })
    const freq_array = new Array(max+1);
    arr.forEach((item,index)=>{
        if(freq_array[item]){
            freq_array[item] +=1
        }else{
            freq_array[item] =1
        }
    })
    let last_index = 0;
    for(let i=0;i<max;i++){
        let freq = freq_array[i]
        while(freq > 0){
            arr[last_index] = i;
            freq--;
            last_index++
        }
    }
    return arr;
}

const arr = [5,3,4,1,2,33,50]
const result = countingSort(arr)
console.log("Sorted array is : ",result);