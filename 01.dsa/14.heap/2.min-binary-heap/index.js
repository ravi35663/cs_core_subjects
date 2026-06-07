/*
===> Representation of MinBinaryHeap:
    ->  arr = [1, 4, 5, 6, 8, 13, 9, 15, 12, 36, 11, 25, 100, 17, 19]
    ->  Finding children of parent having index n;
        1) LeftChild  =  (2n+1)
        2) RightChild =  (2n+2)
        For instance:
              1
            /   \
           4     5

    ->  Finding parent of a child having index n:
        Parent = Floor((n-1)/2)
*/

// Implementation of max binaryHeap:
class MinBinaryHeap{
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
            if(this.values[child_index] < this.values[parent]){
                [this.values[child_index],this.values[parent]] = [this.values[parent],this.values[child_index]];
                child_index = parent;
            }else{
                break;
            }
        }
    }
    viewMaxBinaryHeap(){
        console.log("Values: ",this.values);
    }
}

const max_binary_heap = new MinBinaryHeap();
max_binary_heap.insert(10)
max_binary_heap.insert(20)
max_binary_heap.insert(30)
max_binary_heap.insert(40)
max_binary_heap.viewMaxBinaryHeap();