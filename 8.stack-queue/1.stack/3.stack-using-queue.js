/*
=> Implement stack using 2 queue:
*/
class Queue{
    constructor(size=10){ // Default the maximum size of a queue is 10:
        this.front = 0;
        this.rear = size-1;
        this.ms = size; // Max size
        this.cs = 0; // Current Size
        this.arr = new Array(size); // This an circular array (when you are implementing push and pop)
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

    isEmpty(){
        return this.cs == 0;
    }

    isFull(){
        return this.cs == this.ms
    }

    // remove element from the queue:(dequeue):
    pop(){
        if(this.cs == 0){
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


class Stack{
    constructor(){
        this.queue1 = new Queue(20)
        this.queue2 = new Queue(20);
    }
    push(val){
        // Push item in non-empty queue:
        if(this.queue1.isEmpty()){
            this.queue2.push(val)
        }else{
            this.queue1.push(val)
        }
    }

    pop(){
        if(!this.queue1.isEmpty()){
            while(!this.queue1.isEmpty()){
                const front = this.queue1.viewFront()
                this.queue1.pop()
                if(this.queue1.isEmpty()){
                    return front;
                }
                this.queue2.push(front);
            }
        }else{
            while(!this.queue2.isEmpty()){
                const front = this.queue2.viewFront()
                this.queue2.pop()
                if(this.queue2.isEmpty()){
                    return front;
                }
                this.queue1.push(front);
            }
        }
    }

    top(){
        if(!this.queue1.isEmpty()){
            while(!this.queue1.isEmpty()){
                const front = this.queue1.viewFront()
                this.queue1.pop()
                this.queue2.push(front);
                if(this.queue1.isEmpty()){
                    return front;
                }
            }
        }else{
            while(!this.queue2.isEmpty()){
                const front = this.queue2.viewFront()
                this.queue2.pop()
                this.queue1.push(front);
                if(this.queue2.isEmpty()){
                    return front;
                }
            }
        }
    }
}

const stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)
stack.push(70)

console.log("Popped item is: ",stack.top());
console.log("Popped item is: ",stack.pop());
console.log("Popped item is: ",stack.top());

/*
Stack:
    1 2 3 4 5 6 7 8 9
*/