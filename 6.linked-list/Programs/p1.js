/*
    1) Implement a singly linked list.
        1) Insert a node at the beginning of a linked list.
        2) Insert a node at the end of a linked list.
        3) Insert a node at a specific position in a linked list.
        4) Delete a node from the beginning of a linked list.
        5) Delete a node from the end of a linked list.
        6) Delete a node at a specific position in a linked list.
        7) Find the length of a linked list.
        8) Search for a given element in a linked list.
        9) Count occurrences of a given element in a linked list.
        10) Delete nodes with a given value in a linked list.
        11) Find the middle of a linked list.
*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // 1) Insert a node at the beginning of a linked list.
    insertNodeAtBegnining(value){
        const node = new Node(value);
        if(!this.head){
            this.tail = node;
        }else{
            node.next = this.head;
        }
        this.head = node;
        this.length++
    }

    // 2) Insert a node at the end of a linked list.
    insertNodeAtEnd(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    // 3) Insert a node at a specific position in a linked list.
    insertNodeAtSpecificPosition(position,value){
        if(position >=0 && position <= this.length){
            if(position === 0 ){
                return this.insertNodeAtBegnining(value);
            }
            const node = new Node(value);
            let temp = this.head;
            let prev = null;
            while(position){
                prev = temp;
                temp = temp.next;
                position--;
            }
            prev.next = node;
            node.next = temp;
            this.length++;

        }else{
            console.log("Please enter valid position.");
        }
    }

    // 4) Delete a node from the beginning of a linked list.
    deleteNodeAtBeginning(){
        if(!this.head){
            console.log("Linked list is empty")
            return;
        }
        const node = this.head;
        if(!this.head.next){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next
        }
        this.length--;
        return node;
    }

    //5) Delete a node from the end of a linked list.
    deleteNodeAtEnd(){
        if(!this.head){
            console.log("Linked list is empty")
            return;
        }
        const node = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            let temp = this.head;
            while(temp.next != this.tail){
                temp = temp.next;
            }
            temp.next = null;
            this.tail = temp
        }
        this.length--;
        return node;
    }

    // 6) Delete a node at a specific position in a linked list.
    deleteNodeAtSpecificPosition(position){
        if(position <0 || position>=this.length){
            console.log("Invalid position")
        }
        if(position == 0){
            return this.deleteNodeAtBeginning();
        }else if(position == this.length-1){
            return this.deleteNodeAtEnd()
        }else{
            let prev = null,temp = this.head;
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

    // 7) Find the length of a linked list.
    lengthOfLinkedList(){
        let temp = this.head;
        let length = 0;
        while(temp){
            length++;
            temp = temp.next;
        }
        console.log("Length of the linked list is: ",length)
        return length;
    }

    // 8) Search for a given element in a linked list.
    findElement(item){
        let temp = this.head;
        let index = 0;
        while(temp){
            if(temp.value == item){
                console.log(`${item} found at index ${index} `)
                return index;
            }
            temp = temp.next;
            index++;
        }
        console.log(`${item} does not exists in linked list`)
        return - 1
    }
    // 9) Count occurrences of a given element in a linked list.
    frequency(item){
        let count = 0;
        let temp = this.head;
        while(temp){
            if(temp.value == item){
                count++;
            }
            temp = temp.next;
        }
        console.log(`Occurance of ${item} is ${count}`);
        return count;
    }

    // 10) Delete nodes with a given value in a linked list.
    deleteNodes(value){
        while(true){
            let temp = this.head;
            let index = 0;
            while(temp){
                if(temp.value === value){
                    break
                }
                temp = temp.next;
                index++;
            }
            if(!temp){
                break;
            }
            if(index === 0){
                this.deleteNodeAtBeginning()
            }else if(index === this.length-1){
                this.deleteNodeAtEnd()
            }else{
                this.deleteNodeAtSpecificPosition(index);
            }
        }
    }

    // 11) Find the middle of a linked list.
    findMiddleElementOfLL(){
        let temp = this.head;
        let mid = Math.floor(this.length/2);
        while(mid){
            temp = temp.next;
            mid--;
        }
        console.log("Middle element of the linked list is : ",temp.value);
        return temp.value;
    }

    viewLinkedList(){
        let temp = this.head;
        while(temp){
            process.stdout.write(`${temp.value} `)
            temp = temp.next
        }
    }
}


const linked_list = new SinglyLinkedList();
linked_list.insertNodeAtBegnining(30)
linked_list.insertNodeAtEnd(70)
linked_list.insertNodeAtBegnining(50)
linked_list.insertNodeAtEnd(20)
linked_list.insertNodeAtEnd(10)
linked_list.insertNodeAtBegnining(50)
// linked_list.insertNodeAtEnd(10)
// linked_list.insertNodeAtEnd(10)
// linked_list.insertNodeAtEnd(10)
// linked_list.insertNodeAtEnd(10)
// linked_list.insertNodeAtEnd(10)
linked_list.viewLinkedList();
console.log("Updated linked list");
// linked_list.lengthOfLinkedList();
// linked_list.findElement(20);
// linked_list.frequency(-10);
linked_list.deleteNodes(50);
// linked_list.findMiddleElementOfLL();
// linked_list.deleteNodeAtBeginning()
// linked_list.deleteNodeAtEnd();
// linked_list.deleteNodeAtSpecificPosition(1);
// linked_list.insertNodeAtSpecificPosition(0,1000)
// linked_list.insertNodeAtSpecificPosition(1,1000)
linked_list.viewLinkedList();