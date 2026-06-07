/*
=> Insertion Sort :-
   -> Insertion sort builds up the sort by gradually creating a part which is already 
      sorted and putting greater and lesser elements by each side of the sorted part of 
      the array.
   -> [5,3,4,1,2]
   -> [5,3,4,1,2] --> leave 5 as it is
   -> [3,5,4,1,2] --> insert 3 before 5
   -> [3,4,5,1,2] --> insert 4 between 3 and 5
   -> [1,3,4,5,2] --> insert 1 before 3 as it is less than 3
   -> [1,2,3,4,5] --> insert 2 after 1 & before 3 because it is greater than 1 and less than 3
   -> Start picking the second element of the array then start sorting because 1 element 
      is always sorted.
   -> The inner loop only runs when the last element of the sorted array is greater than 
      the first element of the unsorted array.
*/
/*
   -> T.C = O(n^2) (worse case)
   -> Note :- 
      If you have a small dataset then you can go with sorting algorithms which have 
      O(N^2) complexity. 
   -> For large datasets try those algorithms which have O(NLogN) complexity.
*/

function insertionSort(arr){
   for(let i=1; i<arr.length; i++){
      for(let j=i; j> 0 && arr[j] < arr[j-1]; j-- ){
         // Because we're making correct room for new item
         [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
      }
   }
}
const arr = [5,3,4,1,2];
const result = insertionSort(arr);
console.log("Result array is : ",result);