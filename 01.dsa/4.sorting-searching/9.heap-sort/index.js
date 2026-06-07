/*
=> Steps to to heap sort:
    1) Convert array into max-heap:
    2) Extract max and put at the end of the heap and shrink the heap by 1 from last
    3) Swap the max heap value to 0th value of the heap:
    4) Do heapify down to place 0th value at the right place of the heap
    5) Repeat step 2 to 4 until last last index not reach to 0:
*/
/*
Note:
    - T.C: O(nlogn)
    - S.C: O(1)
    - You can also sort the array by using and building min-heap:
*/
class Solution {
    heapSort(nums) {
        // Build max heap:
        let leafs = Math.floor(nums.length/2) - 1;
        for(let i = leaf; i>=0; i--){
            this.heapifyDown(nums, i, nums.length);
        }
        // Extract Max:
        let end = nums.length - 1;
        while(end >= 0){
            // Extract max and swap with 0th
            [nums[0],nums[end]] = [nums[end],nums[0]];
            this.heapifyDown(nums, 0, end);
            end--;
        }
    }
    // Heapify down:
    heapifyDown(arr, i, len){
        const l = (2 * i) + 1;
        const r = (2 * i) + 2;
        let s = i;
        if(l < len && arr[l] > arr[s]){
            s = l;
        }
        if(r < len && arr[r] > arr[s]){
            s = r;
        }
        if(s != i){
            [arr[s],arr[i]] = [arr[i],arr[s]]
            this.heapifyDown(arr, s, len);
        }
        return;
    }
}