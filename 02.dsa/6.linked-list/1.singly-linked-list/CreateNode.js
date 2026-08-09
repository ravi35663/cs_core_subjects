// Creating of node of singly linked list
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

module.exports = {Node}
// const firstNode = new Node('Hi');
// firstNode.next = new Node("there");
// const secondNode = firstNode.next;
// secondNode.next = new Node('How');
// const thirdNode = secondNode.next;
// thirdNode.next = new Node('are');
// const fourthNode = thirdNode.next;
// fourthNode.next = new Node('you');
// const fifthNode = fourthNode.next;
// console.log("first node ",fifthNode);