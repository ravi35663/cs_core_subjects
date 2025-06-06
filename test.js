const Queue = require("./Queue/queue-with-array");
/*
==> K-th Level
    Given a binary tree with N nodes. Your task is to print its Kth level.

    Input Format
        In the function a pointer to the root node of the binary tree is passed.
    Output Format
        Return a vector containing nodes at Kth level


    Input:       
            60             --- Level 0
            /  \
        50    30          --- Level 1
        /  \   /
        80   10 40           --- Level 2
    
    K = 1
    Output: 30 50
 
Input:
           50            --- Level 0
          /  \
        60    70         --- Level 1
       /  \   / \
     90   40 40  20      --- Level 2
K = 2
Output: 20 40 90

*/
// const Queue = require('../Queue/queue-with-array');
/*
==> Binary Tree-Traversal:
    -> Pre-order Traversal: Root, Left, Right
    -> In-order Traversal: Left, Root, Right
    -> Post-order Traversal: Left, Right, Root
*/

class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
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

// Preorder-Tree-Traversal: In pre-order, we traverse left part of the node and then right part of the node.
// Order of traversal in preorder: Root,Left,RIght
function preorderBinaryTreeTraversal(root){
    if(root == null){
        return;
    }
    process.stdout.write(root.value + " ");
    preorderBinaryTreeTraversal(root.left);
    preorderBinaryTreeTraversal(root.right);
}

// Inorder-tree-traversal:
// Order of traversal in inorder: Left, Root, Right:
function inorderTraversal(root){
    if(root == null){
        return;
    }
    inorderTraversal(root.left);
    process.stdout.write(root.value + " ");
    inorderTraversal(root.right);
}

// Postorder-traversal: Left,right,root: This is very important traversal:
function postorderTraversal(root){
    if(root == null){
        return;
    }
    postorderTraversal(root.left);
    postorderTraversal(root.right);
    // console.log("Item is: ",root.value);
    process.stdout.write(root.value + " ");
}

/*
==> Print-Level-Order:(BFS):
        Print binary tree using level order traversal:
        -> Use Queue data structure to put items of visited nodes (left and right)
        ==> Input: 
         (1)
        /   \
      (2)   (3)
      /  \     \
    (4)   (5)  (6)
    /
  (7)

    ==> Output: [1,2,3,4,5,6,7]
*/
function levelOrderTraversal(root){
    let q = new Queue(100);
    q.push(root);
    q.push(null);

    while(q.cs){
        const temp = q.viewFront();
        if(temp == null){
            console.log();
            q.pop();
            // insert a new null for next level:
            if(q.cs != 0){
                q.push(null)
            }
        }else{
            q.pop();
            process.stdout.write(temp.value+" ")
            if(temp.left){
                q.push(temp.left)
            }
            if(temp.right){
                q.push(temp.right);
            }
        }
    }
    return;
}


// Height Of the Binary Tree:
function heightOfBinaryTree(root){
    if(root == null) return 0;
    let h1 = heightOfBinaryTree(root.left);
    let h2 = heightOfBinaryTree(root.right);
    return 1 + Math.max(h1,h2);
}


// Print K the level nodes:
function dfs(root,k,output=[]){
  if(!root) return output;
  if(k == 0){
    process.stdout.write(`${root.value} `);
    output.push(root.value);
    return;
  }
  dfs(root.right,k-1,output);
  dfs(root.left,k-1,output);
  return output;
}

// return sum of all node// root,left,right
function nodeSum(root){
    if(!root) return 0;
    return root.value + nodeSum(root.left) + nodeSum(root.right);
}

// -1 is treated as null
const preorder = [1,2,4,-1,-1,5,7,-1,-1,-1,3,-1,6,-1,-1]
// const preorder = [60,50,80,-1,-1,10,-1,-1,30,40,-1,-1,-1];
const root = buildBinaryTree(preorder);
// console.log("--------------------Preorder-traversal--------------------------")
// preorderBinaryTreeTraversal(root); //1 2 4 5 7 3 6
// console.log("--------------------Inorder-traversal--------------------------")
// inorderTraversal(root) // 4 2 7 5 1 3 6
// console.log("--------------------Postorder-traversal--------------------------")
// postorderTraversal(root); // 4 7 5 2 6 3 1

console.log("--------------------Level-Order-traversal--------------------------")
levelOrderTraversal(root);
console.log("--------------------K-Level-traversal--------------------------")
console.log(dfs(root,2))
// console.log("--------------------Height of a tree--------------------------")
// console.log(heightOfBinaryTree(root));
console.log("Node sum is: ",nodeSum(root))
