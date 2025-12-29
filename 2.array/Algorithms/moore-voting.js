/*
    Given an integer array nums of size n, return the majority element of the array.
    The majority element of an array is an element that appears more than n/2 times in 
    the array. 
    The array is guaranteed to have a majority element.

    Input: nums = [7, 0, 0, 1, 7, 7, 2, 7, 7]
    Output: 7

    Explanation: The number 7 appears 5 times in the 9 sized array
*/

/*
==> Moore's voting algorithm:
    ->  Moore’s Voting Algorithm is used to find the majority element in an array in O(n) 
        time and O(1) space.
    ->  A majority element is the one that appears more than ⌊n/2⌋ times in the array.

    Steps
        1) Candidate Selection
            ->  Iterate through the array, keeping a count and a candidate.
            ->  If count == 0, set candidate = current element.
            ->  If current element equals candidate, increment count.
            ->  Else, decrement count.
        2) Validation (optional but important)
            ->  Run through the array again to confirm that the candidate is indeed 
                the majority element.
*/

function majorElement(nums){
   let count = 1;
   let ele = nums[0]; 
   for(let i=1;i<nums.length;i++){
        if(nums[i] == ele){
            count++;
        }else{
            count--;
        }
        if(count == 0){
            count = 1;
            ele = nums[i];
        }
   }
   return ele;
}