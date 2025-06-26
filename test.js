/*
==> Stack using Array:
*/

class Stack{
    constructor(){
        this.stack = [];
    }

    push(val){
        this.stack.push(val);
    }

    pop(){
        return this.stack.pop();
    }

    top(){
        const len = this.stack.length;
        if(len == 0) return;
        return this.stack[len-1];
    }

    /*
        const arr = [1,2,3,4,5,6], k = 20;
        output = [20,1,2,3,4,5,6]
    */ 
   
    insertAtBottom(val){
        if(!this.stack.length){
            this.stack.push(val);
            return;
        }
        const v = this.stack.pop();
        this.insertAtBottom(val);
        this.stack.push(v)
    }

    reverse(){
        // Base Condition:
        if(!this.stack.length) return;
        // Popped out all the elements into the stack:
        const val = this.stack.pop();
        this.reverse();
        this.insertAtBottom(val);

    }
}

const s = new Stack();
s.push(10);
s.push(20)
s.push(30);
// s.insertAtBottom(50);
console.log("Before reverse: ",s.stack);
s.reverse();
// s.insertAtBottom(50)
console.log("After reverse: ", s.stack);