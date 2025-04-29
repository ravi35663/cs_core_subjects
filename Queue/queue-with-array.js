class Queue{
    constructor(size=10){ // Default the maximum size of a queue is 10:
        this.front = 0;
        this.rear = size-1;
        this.ms = size;
        this.cs = 0;
        this.arr = []; // This an circular array (when you are implementing push and pop)
    }

    // Add element into the queue:(enqueue)
    push(val){
        // Check if queue is full
        if(this.cs == this.ms){
            console.log("Queue is full:");
            return;
        }
        // Take rear to the next position (Dry Run)
        this.rear = (this.rear + 1) % this.ms;
        this.arr[this.rear] = val;
        this.cs++;
    }

    // remove element from the queue:(dequeue):
    pop(){
        if(this.cs == 0){
            console.log("Queue is empty:");
            return;
        }
        this.front = (this.front+1) % this.ms; // Move front 1 step ahead:
        this.cs--;
    }

    // View the front element of the queue:
    viewFront(){
        return this.arr[this.front]
    }
}

const queue = new Queue(10);
queue.push(10)
queue.push(20)
queue.push(30)
queue.push(40)
queue.push(50)
queue.push(60)
queue.push(70)
queue.push(80)
queue.push(90)
queue.push(100)
// queue.push(110)
queue.pop()
queue.pop()

// queue.push(10)
// queue.push(10)
// queue.push(10)

console.log("Front: ",queue.viewFront())

module.exports = Queue