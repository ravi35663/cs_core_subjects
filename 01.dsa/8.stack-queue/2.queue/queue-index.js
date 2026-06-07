/*
=> Queue :-
    -> Queue is a data structure used to add data 'in' and remove data 'out'.
    -> Queue is a FIFO(First in first out) data structure.
    -> We can implement a queue using arrays or with (linked list) classes.
    -> 'enqueue' means pushing element into queue
    -> 'dequeue' means removing elements from the queue.
    -> enqueue and dequeue are performed in constant time.

=> Uses of queue in programming:-
    -> Background tasks. (Task added in queue to execute)
    -> Uploading resources
    -> Printing/task processing

==> Big O of queue:
    -> Push : O(1)
    -> Pop: O(1)
    -> Front: O(1)
    -> Access: O(N)
    -> Search: O(N)
*/

const Node = require('../Node')
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // Enqueue(enqueueing element at very end of the Queue)
    enqueue(value){
        const node = new Node(value);
        if(!this.first){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last  = this.last.next;
        }
        this.size++;
        return this.size;
    }
    // Dequeue (Removing element at very beginning of the Queue )
    dequeue(){
        if(!this.first){
            return null;
        }
        const temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--
        return temp.value;
    }
    // Access elements
    display(){
        let item = this.first;
        while(item){
            process.stdout.write(`${item.value} `);
            item = item.next;
        }
        console.log();
    }
}

const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.display();
queue.dequeue()
queue.display();