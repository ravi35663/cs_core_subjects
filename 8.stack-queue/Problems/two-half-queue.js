/*
Interleave two halves of a queue:
    Given a queue of integers of even length, rearrange the elements by interleaving 
    the first half of the queue with the second half of the queue.

Input Format
    In the function an integer queue passed.

Output Format
    Return the interleaved queue .


Sample Input
    11 12 13 14 15 16 17 18 19 20

Sample Output
    11 16 12 17 13 18 14 19 15 20
*/

//Create a queue:
class Queue{
    constructor(size=10){
        this.ms = size;
        this.cs = 0
        this.arr = [];
        this.front = 0;
        this.rear = size-1;
    }

    isEmpty(){
        return this.cs == 0;

    }

    isFull(){
        return this.ms == this.cs;
    }

    push(val){
        if(this.isFull()){
           console.log("Queue is full:")
           return; 
        }
        this.rear = (this.rear+1) % this.ms;
        this.arr[this.rear] = val;
        this.cs++;
    }

    //Pop
    pop(){
        if(this.isEmpty()){
            console.log("Queue is empty:");
            return;
        }
        this.front = (this.front+1) % this.ms;
        this.cs--;
    }

    // Top
    top(){
        return this.arr[this.front];
    }
}

const arr = '11 12 13 14 15 16 17 18 19 20'.split(' ').map(item=> Number(item));
const queue = new Queue(arr.length);
// Push items into queue:
arr.map(item=> {
    queue.push(item);
})


function interLeave(queue){
    let q1 = new Queue();
    let q2 = new Queue();
    // Push 1st half into q1
    const len = queue.ms;
    const half = Math.floor(len/2)
    for(let i=0; i<half; i++){
        const item = queue.top();
        queue.pop();
        q1.push(item);
    }
    for(let i=0; i<half; i++){
        const item = queue.top();
        queue.pop();
        q2.push(item);
    }
    for(let i=0; i<half; i++){
        const item1 = q1.top();
        const item2 = q2.top();
        queue.push(item1)
        queue.push(item2)
        q1.pop();
        q2.pop();
    }
    return queue
}
interLeave(queue);
//11 16 12 17 13 18 14 19 15 20