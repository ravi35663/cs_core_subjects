/*
=> Representation of MaxBinaryHeap:
    -   arr = [100, 19, 36, 17, 12, 25, 5, 9, 15, 6, 11, 13, 8, 1, 4]
    -   Finding children of parent having index n;
        1) LeftChild  =  (2n+1)
        2) RightChild =  (2n+2)
        For instance:
                    100( 0-> index)
                    /  \
        (1-index) 19   36 (2 - index)

    -   Finding parent of a child having index n:
        Parent = Floor((n-1)/2)
*/

/*
=> Insert value:
    1) Add item at the end of the heap
    2) Bubble up the heap so that you put the item at the right spot
    3) Get the index of recent added item
    4) Run a loop until the item has not reach their right spot.
        -   compare child item with parent
        -   if child item is greater than parent then swap the value 
            and make parent_index = child_index
            
        -  else item is already at the right spot and then break the loop their.
*/

/*
=> Extract Maximum value:
    -   The procedure for deleting the root from the heap (efficiently extracting 
        maximum-element from the max heap or extracting the minimum element from the 
        min-heap) and restoring the properties is called down-heap 
        (AKA bubble-down, shift-down, extract min-max).
*/ 

/*
=> Steps to extract maximum element from the heap:
    1) Swap the first value in the values (arr) with the last one.
    2) Pop from the values properties, so you can return the value at the end.
    3) Have the new-root "sink-down" to the correct spot
        -  Your parent index start at 0 (root index)
        -  find the index of your left child ( 2 * index + 1) (Make sure it is not out of bound)
        -  If left child is greater than parent then swap with parent
        -  Find the rightChild (2 * index + 2) (Make sure it is not out of bound)
        -  Check right child is greater than parent swap with parent.
        -  Always swapped with largest (Right or Left) with parent.
        -  The children you swapped become parent.
        -  Keep looping and swap until neither child is larger than the parent
    4) return the Old root
*/

// Implementation of max binaryHeap:
class MaxBinaryHeap{
    constructor(){
        this.values = [];
    }
    // 
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp(){
        let child_index = this.values.length-1;
        while(child_index > 0){
            let parent = Math.floor((child_index-1)/2);
            if(this.values[child_index] > this.values[parent]){
                [this.values[child_index],this.values[parent]] = [this.values[parent],this.values[child_index]];
                child_index = parent;
            }else{
                break;
            }
        }
    }
    // Remove latest element
    extractMax(){
        // [this.values[0],this.values[this.values.length-1]] = [this.values[this.values.length-1],this.values[0]]
        const end = this.values.pop();
        const max = this.values[0];
        if( this.values.length > 0){
            this.values[0] = end;
            // Bubble-Down
            this.bubbleDown()    
        }
        return max;
    }

    bubbleDown(){
        let idx = 0;
        let parent = this.values[idx];
        let len = this.values.length;
        while(true){
            let leftIndex = (2 * idx + 1);
            let rightIndex = (2 * idx + 2);
            let swap = null;
            // Check the left child value with the parent
            if(leftIndex < len){
                if(this.values[leftIndex] > parent){
                    swap = leftIndex;
                }
            }
            // Check the right child value with parent
            if(rightIndex < len){
                if( 
                    ( swap === null && this.values[rightIndex] > parent ) || 
                    ( swap !== null && this.values[rightIndex] > this.values[leftIndex] )
                ){
                    swap = rightIndex;
                }
            }
            if(swap === null){
                break;
            }else{
                // idx = swap;
                [this.values[idx], this.values[swap]] = [this.values[swap], this.values[idx]];
                idx = swap;
            }
        }
    }

    // bubbleUp(){
    //     let child_index = this.values.length-1;
    //     while(child_index > 0){
    //         let parent = Math.floor((child_index-1)/2);
    //         if(this.values[child_index] > this.values[parent]){
    //             [this.values[child_index],this.values[parent]] = [this.values[parent],this.values[child_index]];
    //             child_index = parent;
    //         }else{
    //             break;
    //         }
    //     }
    // }

    viewMaxBinaryHeap(){
        console.log("Values: ",this.values);
    }
}

const max_binary_heap = new MaxBinaryHeap();
max_binary_heap.insert(10)
max_binary_heap.insert(20)
max_binary_heap.insert(30)
max_binary_heap.insert(42)
max_binary_heap.insert(39)
max_binary_heap.insert(35)
max_binary_heap.insert(50)
max_binary_heap.viewMaxBinaryHeap();
max_binary_heap.extractMax();
max_binary_heap.extractMax();
max_binary_heap.viewMaxBinaryHeap();
// Completed this code
// [50, 39, 42, 10, 30, 20, 35]