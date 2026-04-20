/*
===> Priority Queue:
    ->  Priority-Queue is a data-structure where each element has a priority.
    ->  Elements with higher priorities are served before elements with lower priorities.
    -> Priority queue is separate from heap, it is concept.
    -> You can implementb priority queue using array, linked list, heap ..etc
*/ 

/*
===> Implementation of priority queue using heap.
1) Write a min-binary-heap (Lower number means higher priority)
2) Each node has a 'val' and 'priority' use the priority to build the heap
3) Enqueue: 
    ->  Enqueue method accepts a value and priority, makes a new node and puts it in the right spot 
        based off its priority. 
    ->  TimeComplexity is O(LogN) 
4) Dequeue: 
    ->  Deueue method removes root element, returns it and rearrage heap using priority.
    ->  TimeComplexity is O(LogN)
*/ 



class Node{
    constructor(value,priority){
        this.value = value;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = []
    }
    //  Adding item to the right spot
    Enqueue(value,priority){
        const node = new Node(value,priority);
        this.values.push(node);
        // Bubble Up (Rearrage the node)
        this.bubbleUp();


    }

    bubbleUp(){
        let childIndex = this.values.length - 1;
        while(childIndex > 0){
            let parentIndex = Math.floor((childIndex-1)/2);
            if(this.values[childIndex].priority <= this.values[parentIndex].priority){
                [this.values[childIndex],this.values[parentIndex]] = [this.values[parentIndex],this.values[childIndex]];
                childIndex = parentIndex;
            }else{
                break;
            }
        }
    }

    viewPriorityQueue(){
        console.log("Priority Queue: ",this.values);
    }
    // removing item from root and rearranging the items
    Dequeue(){
        if(this.values.length === 0){
            return null;
        }
        const min = this.values[0];
        const item = this.values.pop()
        if(this.values.length > 0){
            this.values[0] = item;
            // Bubble Down (rearrange the heap)
            this.bubbleDown();
        }
        return min;
    }
    bubbleDown(){
        let p_id = 0;
        let length = this.values.length;
        while(true){
            let leftChildIndex = (2* p_id +1 );
            let rightChildIndex = 2* (p_id+1);
            let swap = null;
            if(length > leftChildIndex){
                if(this.values[leftChildIndex].priority < this.values[p_id].priority ){
                    swap = leftChildIndex;
                }
            }
            if(length > rightChildIndex){
                if(
                    (swap === null && this.values[rightChildIndex].priority < this.values[p_id].priority) ||
                    (swap !== null && this.values[rightChildIndex].priority < this.values[swap].priority)
                    ){
                        swap = rightChildIndex;
                    }
            }
            if(swap === null){
                break;
            }else{
                [this.values[swap],this.values[p_id]] = [this.values[p_id],this.values[swap]]
                p_id = swap;
            }
        }
    }
}

const priority_queue = new PriorityQueue();
priority_queue.Enqueue(10,1)
priority_queue.Enqueue(10,2)
priority_queue.Enqueue(10,3)
priority_queue.Enqueue(10,4)
priority_queue.Enqueue(10,2)
priority_queue.Enqueue(10,1)
priority_queue.Enqueue(10,5)
priority_queue.Enqueue(10,1)
priority_queue.Enqueue(10,3)
priority_queue.Enqueue(10,2)
priority_queue.Enqueue(10,7)
priority_queue.Enqueue(10,4)
priority_queue.Enqueue(10,0)
priority_queue.viewPriorityQueue();
priority_queue.Dequeue();
priority_queue.Enqueue(10,-1)
priority_queue.viewPriorityQueue();