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
        const last_index = this.stack.length;
        if(!last_index){
            return null;
        }
        return this.stack[last_index-1];
    }

    // Insert at bottom: You cannot directly insert into stack, you have to first empty the stack then you have to add/push items one-by-one:
    insertAtBottom(val){
        if(this.stack.length ==0){
            this.stack.push(val);
            return;
        }
        // Keep the popped value from the stack so that you can push it back later:
        const temp = this.stack.pop();

        // Remove all elements of the stack until stack have some elements left:
        this.insertAtBottom(val);

        // Add items into the stack after adding required value at the bottom of the stack:
        this.stack.push(temp);
    }

    // Reverse a stack:
    reverse(){
        if(this.stack.length ==0){
            return;
        }
        // Keep the popped value from the stack so that you can push it back later:
        const temp = this.stack.pop();
        this.reverse();
        this.insertAtBottom(temp);
    }
}

const s = new Stack();

s.push(10);
s.push(20)
s.push(30);
// s.insertAtBottom(50);
console.log("Before reverse: ",s.stack);
s.reverse();
console.log("After reverse: ", s.stack);