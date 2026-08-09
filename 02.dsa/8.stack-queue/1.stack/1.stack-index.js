/*
=> Stack :-
    -> Stack is an abstract data structure.
    -> Stack is a LIFO(Last In First Out) data structure.
    -> Stack is just a concept.
    -> 'push' and 'pop' in the stack should be in constant time.
    -> Stack always prioritizes push and pop which is in constant time.
    -> Stack is used to add data 'in' and remove data 'out'.
*/ 
/*
=> Where to use Stack:
    -> Undo/Redu
    -> Routing(the history object) is treated as a stack.
    -> Function Call Stack in Programming:
    -> Expression Evaluation and Parsing:
    -> Parentheses Matching:
    -> Reversing Words or Strings:
    -> Backtracking Algorithms
    -> Textbook/Plate Stacking:
    -> Undo in Graphics and Design Software:
    -> Memory Management in Recursion:
    -> ....etc.

=> Using Stack with Array :-
    ->  If you add an element at the end of an array then you should remove the element from at the end.
    ->  If you add an element at the start of the array then you should remove the element at the start.

        i.e. (pushing and popping from the end)
            let stack = [];
            stack.push(10); //[10]
            stack.push(12); //[10,12]
            stack.pop(); // [10]
            stack.pop(); // []

        i.e. (pushing and popping from the start)
            let stack = [];
            stack.unshift(10); //[10]
            stack.unshift(12); //[10,12]
            stack.shift(); // [10]
            stack.shift(); // []

Note: Adding/removing element at beginning in array has more complexity than adding/removing from the end.

=> Big O of stack:
    -> Push : O(1)
    -> Pop: O(1)
    -> Top: (1) -> Seeing what present at the top of the stack:
    -> Access: O(N)
    -> Search: O(N)
*/ 
/*
=> Implementation: 
    -> You can implement stack using linked list and using array.
*/

const Node = require('../Node');
class Stack{
    constructor(){
        this.start = null;
        this.end = null;
        this.size = 0;
    }
    //Push element at the beginning of the stack (Should be in constant time)
    push(value){
        const node = new Node(value);
        if(!this.start){
            this.start = node;
            this.end = node;
        }else{
            let temp = this.start;
            node.next  = temp;
            this.start = node;
        }
        this.size++;
        return this.size;
    }
    // remove the element at the end (Should be in constant time)
    pop(){
        if(!this.start){
            return null;
        }
        const item = this.start.value
        if(this.size === 1){
            [this.start,this.end ] = [null,null];
        }
        this.start = this.start.next;
        this.size--;
        return item;
    }
    // To see top element of the stack: 0(1)
    top(){
        return this.head? this.head.val: null;
    }

    display(){
        let item = this.start;
        while(item){
            process.stdout.write(`${item.value} `);
            item = item.next;
        }
        console.log();
    }
}

const stack = new Stack();
stack.push("My")
stack.push("Name")
stack.push("is")
stack.push("Ravi")
stack.push("Kumar")
stack.push("Sharma");
stack.display();
// stack.push("From");
console.log(stack.pop())
stack.display();
console.log("Size of stack is ",stack.size);

