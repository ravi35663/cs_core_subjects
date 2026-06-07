/*
    sumZero()
    WAP to find zero sum pair in sorted array;
*/

const sortedArray = [-4,-3,-2,-1,0,1,20,50,45]
// This solution is known as two pointer solution
const zeroSum = (sortedArray)=>{
    let left = 0;
    let right = sortedArray.length - 1;
    while(left < right){
        sum = sortedArray[left] + sortedArray[right]
        if( sum === 0){
            return [sortedArray[left] ,sortedArray[right]];
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
    return null;
}

const result = zeroSum(sortedArray);
console.log(result);