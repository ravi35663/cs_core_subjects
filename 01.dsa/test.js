// Implements queue using array:
class Queue{
    constructor(size=10){
        this.front = 0;
        this.rear = size - 1;
        this.ms = size;
        this.cs = 0;
        this.arr = new Array(size);
    }

    enqueue(val){
        if(this.cs >= this.ms){
            console.log("Queue is full:")
            return;
        }

        // push at rear
        this.rear = (this.rear + 1) % this.ms;
        this.arr[this.rear] = val;
        this.cs++;
    }

    dequeue(){
        if(this.cs == 0){
            console.log("Queue is empty")
            return;
        }

        this.front = (this.front + 1) % this.ms;
        this.cs--;
    }

    viewFront(){
        return this.arr[this.front];
    }

}