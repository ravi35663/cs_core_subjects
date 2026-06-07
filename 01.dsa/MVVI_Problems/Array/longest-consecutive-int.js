/*
    128. Longest Consecutive Sequence | Medium | Topics | Companies
    
    Given an unsorted array of integers nums, return the length of the longest consecutive elements 
    sequence.

    You must write an algorithm that runs in O(n) time.

    Example 1:
        Input: nums = [100,4,200,1,3,2]
        Output: 4
        Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length 
        is 4.
    Example 2:
        Input: nums = [0,3,7,2,5,8,4,6,0,1]
        Output: 9
*/

// Brute-force:
var longestConsecutive = function(nums) {
    if(nums.length ==0){
        return 0;
    }
    const obj = {};
    const unique_ele = [];
    nums.forEach(item=>{
        obj[item] = true;
        if(!obj[item]){
            unique_ele.push(item);
        }
    });
    unique_ele.sort((a,b)=> a - b);
    let max = 1;
    let count = 1;
    for(let i=0;i<unique_ele.length - 1;i++){
        if(unique_ele[i+1] - unique_ele[i] == 1){
            count++;
        }else{
            if(count > max){
                max = count;
            }
            count = 1;
        }
    }
    return max > count ? max:count;
};


// const nums = [100,4,200,1,3,2];
// const nums = [1,2,0,1];
// const nums = [0,3,7,2,5,8,4,6,0,1];
// [1,2,3,4,100,200]
console.log("Count is: ",longestConsecutive(nums));

//[0,3,7,2,5,8,4,6,0,1]
// [0,0,1,2,3,4,5,6,7,8]