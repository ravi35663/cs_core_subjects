/*
Alternate Merge:
    Given two linked lists, insert nodes of second list into first list at alternate positions of 
    first list.

    Input Format
    In the function pointer to the start of the two linklists is passed.

    Output Format
    Return a pointer to the new merged list.


    Sample Input
    5->7->17->13->11
    12->10->2->4->6

    Sample Output
    5->12->7->10->17->2->13->4->11->6
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

    insertNodeAtEnd(val){
        const node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
        return this.head;
    }
    view(head){
        while(head){
            process.stdout.write(`${head.val} `);
            head = head.next
        }
        console.log("")
    }
}

function  mergeTwoLinkedLists(first,second){
    let prev = new Node(0);
    let temp = prev;
    while(first && second){
        let temp1 = first;
        let temp2 = second;

        first = first.next;
        second = second.next;

        temp1.next = temp2;
        prev.next = temp1;
        prev = temp2;
    }
    if(first){
        prev.next = first;
    }
    if(second){
        prev.next = second;
    }
    return temp.next
}

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10,11];

const ll1 = new LinkedList();
arr1.forEach(item=>{
    ll1.insertNodeAtEnd(item);
})

console.log("First linked list is: ")
ll1.view(ll1.head);

console.log("Second linked list is: ");


const ll2 = new LinkedList();
arr2.forEach(item=>{
    ll2.insertNodeAtEnd(item);
})

ll2.view(ll2.head);

console.log("Merged linked is: ",)

const l = mergeTwoLinkedLists(ll1.head,ll2.head);
ll1.view(l);