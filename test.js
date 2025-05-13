//Pre-order build tree:
class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

/*
==> Binary Tree-Traversal:
    -> Pre-order Traversal: Root, Left, Right
    -> In-order Traversal: Left, Root, Right
    -> Post-order Traversal: Left, Right, Root
*/

function BuildBinaryTree(arr){
    let index = 0;
    function buildTree(){
        
        if(index >= arr.length || arr[index] == -1 || arr[index] == null){
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
// Tree Traversal:
const preOrder = (root)=>{
    if(root == null) return;
    process.stdout.write(` ${root.value} `);
    preOrder(root.left);
    preOrder(root.right);
}

const inOrder = (root)=>{
    if(root == null) return;
    inOrder(root.left);
    process.stdout.write(` ${root.value} `);
    inOrder(root.right);
}

const postOrder = (root)=>{
    if(root == null) return;
    postOrder(root.left);
    postOrder(root.right);
    process.stdout.write(` ${root.value} `);
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
const Queue = require('./Queue/queue-with-array');

const levelOrderTraversal = (root)=>{
    const q = new Queue(50);
    q.push(root);
    q.push(null);
    while(q.cs){
        const temp = q.viewFront();
        q.pop();
        if(temp){
            process.stdout.write(` ${temp.value} `)
            if(temp.left){
                q.push(temp.left);
            }
            if(temp.right){
                q.push(temp.right);
            }
        }else{
            console.log();
            if(q.cs){
                q.push(null)
            }
        }
    }
}

const arr  = [1,2,4,-1,-1,5,7,-1,-1,-1,3,-1,6,-1,-1];
const root = BuildBinaryTree(arr);
// console.log("--------------------------------------Pre-Order------------------------------------------")
// preOrder(root);

// console.log("--------------------------------------In-Order------------------------------------------")
// inOrder(root);

// console.log("--------------------------------------Post-Order------------------------------------------")
// postOrder(root);

console.log("--------------------------------------Level-Order------------------------------------------")
levelOrderTraversal(root);