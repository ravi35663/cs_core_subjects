/*
===> Housing:
    Along one side of a road there is a sequence of vacant plots of land. Each plot has a different area 
    (non-zero). So, the areas form a sequence A[1], A[2], ... A[N].

    You want to buy K acres of land to build a house. You want to find all segments of contiguous plots 
    (i.e., a subsection in the sequence) of whose sum is exactly K.

    Plots = [1, 3, 2, 1, 4, 1, 3, 2, 1, 1, 2]
    K = 8

    Sample Output
    s  e 
    2  5 
    4  6
    5  9
*/

/*
==> solve this housing problems by using below approaches as well:
1) Brute force - N^3
2) Prefix sum - N^2
3) Prefix sum with binary search: NlogN
4) then using sliding window
*/

function housing(arr,k){
    let i=0;
    let j = 0;
    let sum = 0;
    let result = []
    while(j < arr.length){
          // Expand the right window 
          sum +=arr[j];
          
          // If sum exceeded from the k then reduce it 
          while(sum > k && i <j){
            sum -=arr[i];
            i++;
          }
          if(sum === k){
            result.push([i,j]);
          }
          j++;
    }
    return result;
  }
  const Plots = [1, 3, 2, 1, 4, 1, 3, 2, 1, 1, 2]
  const K = 8
  console.log("Result is: ",housing(Plots,K));
  
  