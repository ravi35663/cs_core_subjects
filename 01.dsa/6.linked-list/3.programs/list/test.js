//
/*
    1) Implement a singly linked list.
        -> Insert a node at the beginning of a linked list.
        -> Insert a node at the end of a linked list.
        -> Insert a node at a specific position in a linked list.
        -> Delete a node from the beginning of a linked list.
        -> Delete a node from the end of a linked list.
        -> Delete a node at a specific position in a linked list.
        -> Find the length of a linked list.
        -> Search for a given element in a linked list.
        -> Count occurrences of a given element in a linked list.
        -> Delete nodes with a given value in a linked list.
        -> Find the middle of a linked list.
*/
class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Find the middle of a linked list.
    findMiddle(){
        let ll_length = Math.floor(this.length/2);
        let temp = this.head;
        while(ll_length){
            temp = temp.next
        }
        return temp.value;
    }
    //Delete nodes with a given value in a linked list
    deleteNodes(item){
        while(1){
            let ll_length = this.length;
            let temp = this.head;
            let index = 0;
            while(index < ll_length){
                if(item === temp.value){
                    break
                }
                index++;
                temp = temp.next
            }
            if(i<ll_length){
                if(i==0){
                    this.deleteAtFirst()
                }else if(i == ll_length-1){
                    this.deleteAtLast()
                }else{
                    this.deleteAtSpecificPosition(index)
                }
            }else{
                return;
            }
        }
    }
    // Count occurrences of a given element in a linked list
    countOccurrences(item){
        let count = 0
        let temp = this.head
        while(temp!=null){
            if(temp.value == item){
                count++
            }
            temp = temp.next
        }
        return  count
    } 
    // To add element at the end of SLL
    addAtLast(value){
        const node = new Node(value);
        if(this.head===null){
            this.head = node;
            this.tail = node;
        } else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return node;
    }

    // add element at the beginning 
    addAtFirst(value){
        const node = new Node(value);
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return node;
    }

    // add element at any position
    addAtSpecificPosition(position,value){
        if(position < 0){
            return;
        }
        if(position == 0 ){
            this.addAtFirst(value);
        }else if (position >= this.length){
            this.addAtLast(value);
        }else {
            const node = new Node(value);
            let temp = this.head;
            let prev = null;
            while(position){
                prev = temp;
                temp = temp.next;
                position--;
            }
            prev.next = node;
            prev.next.next = temp;
            this.length++;
        }
        return this.head;
    }

    // Delete node at the beginning of sll
    deleteAtFirst(){
        if(this.length === 0 ){
            return;
        }
        const node=this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else {
            this.head = this.head.next;
        }
        this.length--;
        return node;
    }

    deleteAtLast(){
        if(this.length < 0){
            return;
        }
        if(this.length === 1){
            return deleteAtFirst();
        }else{
            let temp = this.head;
            let prev = null;
            while(temp.next){
                prev = temp;
                temp = temp.next;
            }
            prev.next = null;
            this.tail = prev;
            this.length--;
            return temp;
        }
    }

    deleteAtSpecificPosition(position){
        if(position < 0 || position >= this.length){
            return;
        }
        if(position === 0){
            return this.deleteAtFirst();
        }else if(position === this.length - 1){
            return this.deleteAtLast();
        }else{
            let temp = this.head;
            let prev = null;
            while(position){
                prev = temp;
                temp = temp.next;
                position--;
            }
            prev.next = temp.next;
            this.length--;
            return temp;
        }
    }
    sizeOfLinkedList(){
        return this.length
    }
    //Search item in linked list
    searchItem(item){
        let temp = this.head
        let index = 0
        while(temp!=null){
            if(temp.value === item){
                return index
            }
            temp = temp.next
        }
        return -1
    }

    access(){
        let temp = this.head;
        let values = ''
        while(temp){
            values = values + '  '+ temp.value 
            temp = temp.next;
        }
        console.log(values);
        return values
    }
}

const sll = new SinglyLinkedList();
// sll.addAtLast(10);
// sll.addAtLast(20);
// sll.addAtLast(30);
// sll.addAtLast(40);
// sll.addAtLast(50);
// sll.addAtFirst(60);
// sll.addAtFirst(70);
// sll.addAtSpecificPosition(0,100);
// sll.addAtSpecificPosition(111,200);
// sll.addAtSpecificPosition(6,300);
// sll.deleteAtLast();
// sll.deleteAtFirst();
// sll.deleteAtLast();
// sll.deleteAtSpecificPosition(9);
// sll.access();
// while(1){
//     console.log('Actions: 1)Add at start 2)Add at end 3) Add at specific\n4)Delete at start 5)Delete at end 6)Delete at specific\n7.Access Linked List 8)Find Length of linked List 9)Find Occurrence of item\n 10) Delete Nodes 11) Search Item 12)Find Middle')
// }
