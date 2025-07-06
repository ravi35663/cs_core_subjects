class Queue{
    constructor(size=10){
        if(size <=0 ){
            console.log("Invalid size: ");
            return;
        }
        this.cs = 0;
        this.ms = size;
        this.rear = size - 1;
        this.front = 0;
        this.arr = new Array(size);
    }

    push(value){
        if(this.cs == this.ms){
            console.log("Queue is full");
            return;
        }
        this.rear = (this.rear+1) % this.ms;
        this.arr[this.rear] = value;
        this.cs++;
        return;
    }

    pop(){
        if(this.cs == 0){
            console.log("Queue is empty");
            return;
        }
        this.front = (this.front + 1) % this.ms;
        this.cs--;
        return;
    }

    viewFront(){
        return this.arr[this.front];
    }
}

const q = new Queue(-10);
console.log("Q is: ",q);


/*
==> Operators:
    1) +, -, /, *
*/

// +
let a =10;
let b = 20;
const sum = a+b;
console.log("Sum is: ",sum);


// -
const diff = a-b;
console.log("Sum is: ",sum);