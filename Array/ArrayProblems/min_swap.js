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

function minimumSwap(arr){
    let sortArr = [...arr].map((value,index)=> ({index,value}));
    sortArr.sort((a,b)=> a.value-b.value);

    // lets keep the visited index so that you will not retrieve the same index again
    let visited = new Array(arr.length).fill(false);
    let totalSwap = 0;
    // traverse each node
    for(let i=0;i<arr.length;i++){
        // Check if item is already visited or item is at the right place if yes then skip the further action
        if(visited[i] || sortArr[i].index === i){
            continue;
        }

        let j = i;
        let cycle = 0;
        // If index/item is not visited the visit the index and their cycle as well
        while(!visited[j]){
            visited[j] = true;
            j = sortArr[j].index; // cycle of the jth element
            cycle++;
        }
        console.log("Max cycle: ",cycle);
        // check if cycle is greater than 1 (at least 3 element should be there to form a cycle)
        //  swap  = totalCycle - 1 if totalCycle > 1
        if(cycle > 1){
            totalSwap += cycle - 1;
        }
    }
    return totalSwap
}

const sampleInputs = [
    { input: [1, 2, 3, 4, 5], output: 0 },       // Already sorted, 0 swaps required
    { input: [5, 4, 3, 2, 1], output: 2 },       // Reverse sorted, requires 2 swaps
    { input: [4, 3, 1, 2], output: 3 },          // Unsorted, 3 swaps required
    { input: [7, 9, 5, 3, 6, 8], output: 4 },    // Random array, requires 4 swaps
    { input: [10, 1, 7, 3, 9, 4], output: 5 },   // Random array, requires 5 swaps
    { input: [2, 1, 3], output: 1 },             // Small array, requires 1 swap
    { input: [4, 6, 5, 7], output: 1 },          // Small array, 1 swap required
    { input: [10, 8, 6, 4, 2], output: 2 },      // Reverse sorted, 2 swaps required
    { input: [1, 2, 9, 4, 5, 8, 7], output: 3 }, // Mixed array, 3 swaps required
    { input: [9, 8, 7, 6, 5, 4, 3, 2, 1], output: 4 }, // Reverse sorted, requires 4 swaps
    { input: [10, 11, 5, 4, 3, 2, 1], output: 4 }, // Mixed array, requires 5 swaps
    { input: [5, 4, 3, 2, 1], output: 2 }        // Reverse sorted, requires 2 swaps
];

sampleInputs.forEach(item=>{
    const result = minimumSwap(item.input);
    // console.log("Results: ",result);
    if(result == item.output){
        console.log(`Test case pass for: ${item.input}`);
    }else{
        console.log(`Test case failed for: ${item.input}`);
    }
})


