/*
    WAP to count unique values in sorted array
    arr: [1,1,1,1,1,2,3,3,4,5,6]
    arr:[-3,-3,-2,-1,0,1,1,1,2,3];
*/

const sortedArr = [-3,-3,-2,-1,0,1,1,1,2,3];
const countUniqueValue = (arr)=>{
    if(!arr.length){
        return 0;
    }
    let count = 1;
    for(let i=0;i<arr.length-1;i++){
        if( arr[i+1]-arr[i] > 0){
            count++;
        }
    }
    return count;
}

const uni_count = countUniqueValue(sortedArr);
console.log(uni_count);
