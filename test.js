//
class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value
    }
}

function buildBinaryTree(arr){
    let index  = 0;
    function tree(){
        if(arr[index] == null || arr[index] == -1 || arr[index] == undefined){
            index++;
            return null;
        }
        const node = new Node(arr[index++])
        node.left = tree();
        node.right = tree();
        return node;
    }
    return tree()
}
//Binary Tree Traversal:
// PreOrderTraversal: Root, Left, Right
function PreOrderTraversal(root){
    if(!root){
        return;
    }
    process.stdout.write(`${root.value} `)
    PreOrderTraversal(root.left);
    PreOrderTraversal(root.right);
}
// InOrderTraversal: Left, Root, Right
function InOrderTraversal(root){
    if(!root){
        return;
    }
    InOrderTraversal(root.left)
    process.stdout.write(`${root.value} `)
    InOrderTraversal(root.right)
}
// PostOrderTraversal: Left, Right, Root:
function PostOrderTraversal(root){
    if(!root){
        return;
    }
    PostOrderTraversal(root.left)
    PostOrderTraversal(root.right)
    process.stdout.write(`${root.value} `)
}

// LevelOrderTraversal:
const Queue = require('./Queue/queue-with-array')
function LevelOrderTraversal(root){
    if(!root) return;
    let q = new Queue(100);
    q.push(root)
    q.push(null)
    while(q.cs != 0){
        const f = q.viewFront();
        q.pop();
        if(f){
            process.stdout.write(`${f.value} `)
            if(f.left){
                q.push(f.left)
            }
            if(f.right){
                q.push(f.right)
            }
        }else{
            console.log()
            if(q.cs !=0 ){
                q.push(null)
            }
        }
    }
}

const arr = [1,2,4,-1,-1,5,7,-1,-1,-1,3,-1,6,-1,-1]
const root = buildBinaryTree(arr);
console.log("--------------------Preorder-traversal--------------------------")
PreOrderTraversal(root); //1 2 4 5 7 3 6
console.log("--------------------Inorder-traversal--------------------------")
InOrderTraversal(root) // 4 2 7 5 1 3 6
console.log("--------------------Postorder-traversal--------------------------")
PostOrderTraversal(root); // 4 7 5 2 6 3 1
console.log("--------------------Level-Order-traversal--------------------------")
LevelOrderTraversal(root);