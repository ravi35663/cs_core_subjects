/*
=> Reverse a linked list
    input: [1,2,3,4,5,6,7];
    output: [7,6,5,4,3,2,1];
*/

class Node{
    constructor(val){
        this.next = null;
        this.val = val
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    // Push node at the end of the linked list;
    push(val){
        const node = new Node(val);
        if(this.head == null){
            this.head = node;
            this.tail = node;
            return node;
        }
        this.tail.next = node;
        this.tail = this.tail.next
        return node;
    }

    // Reverse a linked list
    reverse(){
        let current = this.head;
        let prev = null;
        while(current){
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
        return prev;
    }

    // Retrieve the linked list
    view(){
        let temp = this.head;
        while(temp){
            process.stdout.write(`${temp.val} `);
            temp = temp.next
        }
        console.log()
        return;
    } 
}

const input = [1,2,3,4,5,6,7];
const ll = new LinkedList();
input.forEach(item=>{
    ll.push(item);
})

ll.view();
ll.reverse();
console.log("LinkedList after reverse")
ll.view();