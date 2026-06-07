/*
    Game of Greed:
    You are playing a game with your 'k' friends. You have an array of N coins, at each index i you have 
    a coin of value a[i].

    Your task is to divide the coins, among a group of K friends by doing consecutive segments 
    (k-subarrays) of the array.
    Each friend will get a total sum of the coins in that subarray. 
    Since all your friends are greedy, and they will pick the largest k-1 segments and you will get the 
    smallest segment. Find out the maximum value you can make by making an optimal partition.

    Note : The coins array may or may not be sorted!

    (Refer Hints at the end if needed)


    Input
    K = 3
    coins = {1,2,3,4};
    
    Output
    3

    Explanation 
    The ideal partition looks like this -
    {1 + 2} = 3
    {3} = 3
    {4} = 4
    You will get a maximum of 3 coins in the best case.

    HINTS
    ======
    Hint 1: Can you apply recursion, Brute force?
    Hint 2: Can you apply Binary Search, is the search space monotonic?
    Hint 3: You can do binary search on search space (MIN, MAX) where Min is the smallest coin 
            denomination in the array and MAX is the sum of all coins in the array.

*/


function gameOfGreed(coins,k){
    // Get the range 
    let start = 0;
    let end = 0;
    let ans;
    coins.forEach(item=> {
        end +=item;
    })
    //
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        const is_possible = divideAmongAll(coins,coins.length,k,mid)
        if(is_possible){
            start = mid+1;
            ans = mid;
        }else{
            end = mid - 1;
        }
    }
    return ans
}

const divideAmongAll = (coins,len,friend,limit)=>{
    let current_sum = 0;
    let partition = 0;
    for(let i=0;i<len;i++){
        if(current_sum + coins[i] >=limit){
            current_sum = 0;
            partition +=1;
        }else{
            current_sum +=arr[i];
        }
    }
    return partition >=friend; 
}


const coins = [1,2,3,4];
const k = 3;
const result = gameOfGreed(coins,k);
console.log("maximum coins: ",result);