const {Node} = require('./CreateNode');
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Add element at the end of the list
    push(value){
        const node = new Node(value);
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length +=1;
        return this;

    }

    // Remove Element from end of the list
    pop(){
        if(this.head ===null || this.head.next === null){
            this.head = null;
            this.tail = null;
            return this.head;
        }
        let item = this.head;
        let newTail = item;
        while(item.next!=null){
            newTail = item;
            item = item.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return newTail;
    }

    // Shifting (shift one element from beginning of the list)
    // remove one element of start of the list and return that element
    shift(){
        if(!this.head){
            return;
        }
        const currentItem = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.head === null){
            this.tail == null;
        }
        return currentItem;
        
    }
    // unshift (adding element at beginning of the node)
    unshift(value){
        const node = new Node(value)
        if(!this.head){
            this.tail = node;
        }else{
            node.next = this.head;
        }
        this.head = node;
        this.length++;
        return this;
    }

    // retrieve element by its position
    getElement(index){
        if(index <0 || index>= this.length){
            return null;
        }
        let item = this.head;
        while(index){
            item = item.next;
            index--;
        }
        return item;
    }
    // This function used to update existing element;
    setElement(index,value){
        const elem = this.getElement(index);
        if(elem){
            elem.value = value;
            return elem;
        }
        return null;
    }

    // set element (this method will add a particular value at specific point/index of the list)
    insertElement(value,index){
        if(index<0 || index > this.length){
            return false;
        }
        if(index === 0 ){
            this.unshift(value)
            return true;
        }
        if(index === this.length){
            this.push(value);
            return true;
        }
        const node = new Node(value);
        let currentItem = this.head;
        let prev = null;
        let currentIndex = 0
        while(currentIndex < index){
            prev = currentItem;
            currentItem = currentItem.next
            currentIndex++;
        }
        node.next = currentItem;
        prev.next = node;
        this.length++;
        return true;
    }

    // Remove Element/node from a specific position
    remove(index){
        if(index<0 || index>=this.length){
            return false;
        }
        if(index ===0){
            return this.shift();
        }
        if(index === this.length-1){
            return this.pop()
        }
        let prev = null;
        let currentNode = this.head;
        let counter = 0;
        while(counter < index){
            prev = currentNode;
            currentNode = currentNode.next;
            counter++;
        }
        prev.next = currentNode.next;
        this.length--;
        return currentNode;        

    }

    // Reverse a linked list
    reverse(){
        let current = this.head;
        this.head = this.tail;
        let prev = null;
        let next = null;
        while(current!=null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;
    }

    view(){
        let item = this.head;
        while(item){
            process.stdout.write(`${item.value} `)
            item = item.next;
        }
        console.log()
    }
}

const singly_linked_list = new SinglyLinkedList();
singly_linked_list.push(10);
singly_linked_list.push(20);
singly_linked_list.push(30);
singly_linked_list.push(40);
// singly_linked_list.view();
// singly_linked_list.insertElement('ravi',9);
// singly_linked_list.setElement(3,'ravi');
// singly_linked_list.remove();
// singly_linked_list.view()
singly_linked_list.reverse();
singly_linked_list.view()
module.exports = singly_linked_list;