/*

💡 Diameter
    Find the diameter of the binary tree, diameter is defined as the largest distance between any 
    two nodes of the tree.
        Note: Diameter may and may not pass through the root.

    (Diagram of a binary tree with nodes: 1, 2, 3, 4, 5, 6, 7)
    ➡️ Diameter: 5
    // Input: 
         1
       /   \
      2     3
     / \     \
    4   5     6  ==> ➡️ Diameter: 5
         \
          7

*/

class Node{
    constructor(val){
        this.left = null;
        this.right = null;
        this.value = val;
    }
}
// Functional class: BuildTheTree
// This way of building a code is known as pre-order build of the tree
 function buildBinaryTree(arr){
    let index = 0;
    function buildTree(){
        if(index >=arr.length || arr[index] == null || arr[index] == -1){
            index++;
            return null;
        }
        const node = new Node(arr[index++]);
        node.left = buildTree();
        node.right = buildTree();
        return node;
    }
    return buildTree();
}

// Height of the Tree:
function BinaryTreeHeight(root){
    if(root == null) return 0;
    const h1 = BinaryTreeHeight(root.left);
    const h2 = BinaryTreeHeight(root.right);
    return 1 + Math.max(h1,h2);
}

function BinaryTreeDiameter(root){
    if(root == null) return 0;
    const d1 = BinaryTreeHeight(root.left) + BinaryTreeHeight(root.right);
    const d2 = BinaryTreeDiameter(root.left);
    const d3 = BinaryTreeDiameter(root.right);
    return Math.max(d1,Math.max(d2,d3));
}
const preorder = [1,2,4,-1,-1,5,7,-1,-1,-1,3,-1,6,-1,-1]
const root = buildBinaryTree(preorder);

console.log("Heigh of the binary tree is: ",BinaryTreeHeight(root))
console.log("Diameter of the Binary Tree is: ",BinaryTreeDiameter(root))