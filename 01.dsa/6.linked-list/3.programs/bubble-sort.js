/*
    Bubble Sort on Linked List
    Given a singly linked list, sort it using bubble sort.

    Input: 10->30->20->5

    Output: 5->10->20->30
*/

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertNode(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
            return this.head;
        }
        this.tail.next = node;
        this.tail = this.tail.next;
        return this.head;
    }

    bubbleSort(){
        
    }
    
    view(){
        while(this.head){
            process.stdout.write(`${this.head.val} `);
            this.head = this.head.next;
        }
        console.log();
    }
}

const arr = [10, 30, 20, 5];
const ll = new LinkedList();
arr.forEach(item=>{
    ll.insertNode(item);
})

ll.view();