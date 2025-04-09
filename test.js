/*

    Given an array of size N, find the minimum number of swaps needed to make the array sorted.
    
    Sample Input:   a1 = [5, 4, 3, 2, 1]
    Sample Output:  2

    Sample Input:   a1 = [10,11,5,4,3,2,1]
    Sample Output:  4
*/

/*
==> Algorithm:
    1) Create a array of object which have value and index of original array
    2) Sort the create array based on value
    3) Create a visited index array and mark initial value of all visited index false
    4) Run a loop from 0 to n-1 index:
        i) If index is visited or the number is on right place then skip the further action
        ii) else: visit the index and their cycle as well
        iii) Check if cycle is greater than 1 then reduce 1 from the cycle and add into the minSwap
    5) Return the minimum swap
*/

function minSwap(arr){
    let temp_arr = arr.map((item,index)=>{
        return {index,value: item};
    });
    temp_arr.sort((a,b)=> a.value - b.value);

    let visitedIndex = new Array(arr.length).fill(false);
    let minSwap = 0;
    for(let i=0;i<arr.length;i++){
        const item = arr[i];
        // is 
        if(temp_arr[i].index == i || visitedIndex[i]){
            continue;
        }

        let j=i;
        let cycle = 0;
        while(!visitedIndex[j]){
            console.log("Value of j is ",j);
            visitedIndex[j] = true;
            j = temp_arr[j].index;
            cycle++;
        }
        console.log("P<><><><>")

        if(cycle > 1){
            minSwap += cycle -1;
        }
    }
    return minSwap;
}

// const arr = [5, 4, 3, 2, 1];
const arr = [10,11,5,4,3,2,1];
console.log("Min Swap is: ",minSwap(arr));