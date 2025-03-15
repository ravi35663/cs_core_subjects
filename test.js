/*

    Given an array of size N, find the minimum number of swaps needed to make the array 
    sorted.
    
    Sample Input:   a1 = [5, 4, 3, 2, 1]
    Sample Output:  2

    Sample Input:   a1 = [10,11,5,4,3,2,1]
    Sample Output:  4
*/

function minSwapToMakeArraySorted(nums){
    // Check if array is already sorted in ascending order then return 0;
    // Check if array is already sorted in descending order then return Math.floor(nums.length/2);
    // These to above live will decrease the time complexity:

    // Keep the array's elements with index and value and sort them by value;
    // let sortedArray = new Array(nums.length);
    let sortedArray = [...nums].map((value,index) =>{
        return {index,value}
    });
    sortedArray.sort((a,b)=> a.value-b.value);
    let visited = new Array(nums.length).fill(false);
    let swap = 0;
    for(let i=0; i<nums.length;i++){
        // If the index is already visited or item is already on correct position then skip the further action
        if(visited[i] || sortedArray[i].index == i){
            continue;
        }
        // Swap the necessary item:
        let j = i;
        let cycle = 0;
        while(!visited[j]){
            visited[j] = 1;
            j = sortedArray[j].index;
            cycle++;
        }
        if(cycle > 1){
            cycle = cycle-1;
            swap +=cycle;
        
        }
    }
    return  swap;

}

const nums = [10,11,5,4,3,2];
minSwapToMakeArraySorted(nums);


/*
[10,11,5,4,3,2,1] => [10,1,5,4,3,2,11] => [2,1,5,4,3,10,11] => [2,1,3,4,5,10,11] => [1,2,3,4,5,10,11]

*/