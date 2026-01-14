/*
==> Doubly Linked List :-
    -> Doubly linked list is identical to singly linked list with an extra previous pointer.
    -> '[Previous Address | Value | Next Address]' -> this is how DLL Node looks like.
    -> Doubly linked lists take extra memory but give you more flexibility with insertion, 
       deletion and all.
    -> Doubly linked lists are better for finding node (almost half time of singly linked 
       list)
*/ 

/*
==> BigO of DLL :-
    -> Insertion: O(1) (At beginning and end)
    -> Removal:   O(1) (At beginning and end)
    -> Searching: O(N/2) => O(N)
    -> Accessing: O(N/2) => O(N)
*/ 

const {Node} = require('./CreateNode');
class DoublyLinkedList{
    constructor(){
       this.head = null;
       this.tail = null;
       this.length = 0; 
    }
    // Add node at the end of the linked list
    push(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length++;
            return node;
        }
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
        this.length++;
        // this is entire linked list
        return this;
    }
    // Remove element at the end of the linked list
    pop(){
        if(!this.head){
            return false;
        }else if(!this.head.next){
            this.head = null;
            this.tail = null;
            this.length = 0 ;
            return true;
        }else{
            let prev = this.tail.prev;
            prev.next = null;
            this.tail = prev;
            this.length--;
            return true;
        }
    }
    // Remove node from beginning of linked list
    shift(){
        if(!this.head){
            return false;
        }else if(!this.head.next){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        return this;
    }
    // Adding node at the beginning of the doubly linked list
    unshift(value){
        let node = new Node(value);
        if(!this.head){
            this.tail = node;
            this.head = node;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return this;
    }

    // get Element by its index
    get(index){
        if(index <0 || index>=this.length){
            return false;
        }
        let diff = this.length - index;
        if(diff <= 0){
            return false;
        }
        if(diff < index){
            console.log("Fetching from end");
            let currentNode = this.tail;
            for(let i=0;i<diff-1;i++){
                currentNode = currentNode.prev;
            }
            console.log("Value is ",currentNode.value);
            return currentNode
        }else{
            console.log("Fetching from start");
            let currentNode = this.head;
            for(let i=0;i<index;i++){
                currentNode = currentNode.next;
            }
            console.log("Value is ",currentNode.value);
            return currentNode;
        }
    }

    // Set value at particular index
    set(index,value){
        let node = this.get(index);
        if(!node){
            return false;
        }
        node.value = value;
        return true;
    }

    // Insert node at any position
    insert(index,value){
        if(index <0 || index > this.length){
            return false;
        }
        if(index === 0){
            return this.unshift(value)
        }
        if(index === this.length){
            return this.push(value)
        }
        let diff = this.length-index;
        let node = new Node(value);
        let currentNode;
        if(diff < index){
            console.log("Inserted from end");
            currentNode = this.tail;
            for(let i=0;i<diff-1;i++){
                currentNode = currentNode.prev;
            }
        }else{
            console.log("Inserted from beginning");
            currentNode = this.head;
            for(let i=0;i<index;i++){
                currentNode = currentNode.next;
            }
        }
        node.next = currentNode;
        node.prev = currentNode.prev;
        currentNode.prev.next = node;
        currentNode.prev = node;
        this.length++;    
        return this;
    }

    // Remove element at certain position
    remove(index){
        if(index < 0 || index>=this.length){
            return false;
        }
        if(index === 0){
            return this.shift();
        }
        if(index === this.length-1){
            return this.pop();
        }
        let diff = this.length-index;
        let currentNode = null;
        if(diff < index){
            console.log("Removing from end");
            currentNode = this.tail;
            for(let i=0;i<diff-1;i++){
                currentNode = currentNode.prev;
            }
        }else{
            console.log("Removing from start");
            currentNode = this.head;
            for(let i=0;i<index;i++){
                currentNode = currentNode.next;
            }
        }
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
        this.length--;
        return this;
    }

    view(){
        let currentNode = this.head;
        while(currentNode != null ){
            process.stdout.write(`${currentNode.value} `);
            currentNode = currentNode.next;
        }
        console.log();
    }
}
const doublyLinkedList  = new DoublyLinkedList();

doublyLinkedList.push(10);
doublyLinkedList.push(20);
doublyLinkedList.push(30);
doublyLinkedList.push(40);
doublyLinkedList.push(50);
doublyLinkedList.push(60);
doublyLinkedList.push(70);
doublyLinkedList.push(80);
doublyLinkedList.push(90);
doublyLinkedList.push(100);
doublyLinkedList.push(110);
// doublyLinkedList.shift();
// doublyLinkedList.view();
// doublyLinkedList.view();
// doublyLinkedList.get(10);
// doublyLinkedList.get(1);
// doublyLinkedList.get(6);
// doublyLinkedList.get(5);
// doublyLinkedList.get(8);
// doublyLinkedList.unshift(19)
// doublyLinkedList.unshift(29)
// doublyLinkedList.unshift(39)
// doublyLinkedList.pop()
// doublyLinkedList.pop()
// doublyLinkedList.push(40);
// console.log(doublyLinkedList)
// doublyLinkedList.view();

// doublyLinkedList.insert(4,"Ravi");
doublyLinkedList.view();
doublyLinkedList.remove(9)
doublyLinkedList.view();