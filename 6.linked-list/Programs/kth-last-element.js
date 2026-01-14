/*
    Kth Last Element
    Implement a function that returns the Kth last of element from the linked list, in a single pass. 
    You can assume K will be less than / equal to length of linked list.

    (Hint : Use two pointers similar to Runner Technique)

    Input:
        You will get head of the linked list.
        1 -> 2 -> 3 -> 4 -> 5 ->6 ->7
        K = 3

    Output
        5

    Explanation:
    Third last element is 5.

*/

/*
    Method: 1 (Will take two pass)
        -> Reverse the linked list and run for kth time to get kth element
    Method: 2:
        1️⃣ Move one pointer K steps ahead.
        2️⃣ Then, move both pointers one step at a time until the first pointer reaches the end.
        3️⃣ The second pointer will be at the Kth last element when the first pointer reaches the last node.
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

    findKthElement(k){
        let first = this.head;
        let second = this.head;
        while(k){
            first = first.next;
            k--;
        }
        while(first){
            first = first.next;
            second = second.next
        }
        console.log("Second val is: ",second.val);
        return second.val;

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
ll.findKthElement(5)


