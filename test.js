// Binary Tree:

class Node{
    constructor(val){
        this.left = null;
        this.right = null;
        this.val = val;
    }
}
// Construct a binary tree:
function MakeBinaryTree(arr){
    let index = 0;
    function binaryTree(){
        if(index >= arr.length || arr[index] == null || arr[index] == -1){
            index++;
            return null;
        }
        const node = new Node(arr[index++]);
        // console.log("Node is: ",index);
        node.left = binaryTree();// 1=> 2=> 4=> 
        node.right = binaryTree();
        return node;
    }
    return binaryTree();
}

const  arr = [1,2,4,-1,-1,5,7,-1,-1,-1,3,-1,6,-1,-1];

const root = MakeBinaryTree(arr);
console.log("Binary tree is: ",root)