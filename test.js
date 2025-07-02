class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}


/*
===> Binary Search Tree :-
    -> Every parent node has at most two children.
    -> Every node to the left of the parent node is always less than parent.
    -> Every node to the right of the parent node is always greater or equal than the parent.
    -> Left and the right part of the BST is always the BST.
    -> InOrder Traversal of a binary search tree is always sorted (LeftRootRight).
    -> BST problems follow a recursive structure.
    -> Mostly all problems can be solved by dividing the problem into sub problems and making recursive calls on subtrees.
    -> BST makes search efficient
*/

/*
===> Big O of BST:-
    -> Search : O(H)( 😬Not Guarantees because if three is linear then it will go on for n) 
        here H is height of the tree.
    -> Insert: O(LogN)( 😬Not Guarantees because if three is linear then it will go on for n)
*/

// const Node = require('./Node');
class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    // By using recursion
    _insert(value){
        this.root = this.__insert(this.root,value)
    }
    // Insert
    __insert(root, value){
        if(root == null){
            return new Node(value);
        }
        if(value < root.value){
            root.left = this.__insert(root.left,value);
        }else{
            root.right = this.__insert(root.right,value);
        }
        return root;
    }

    //insert item into tree (Without using recursion)
    insert(value){
        const node = new Node(value);
        if(!this.root){
            this.root = node;
            return this.root;
        }else{
            let temp = this.root;
            while(true){
                if(value > temp.value){
                    if(!temp.right){
                        temp.right = node;
                        return this.root;
                    }else{
                        temp = temp.right;
                    }
                }else{
                    if(!temp.left){
                        temp.left = node;
                        return this.root;
                    }else{
                        temp = temp.left
                    }
                }
            }
        }
    }

    // Find node
    find(value){
        if(this.root){
            let temp = this.root;
            while(temp!=null){
                if(value === temp.value){
                    return temp;
                }else if(value > temp.value){
                    temp  = temp.right;
                }else{
                    temp = temp.left
                }
            }
        }
        return null;
    }
    // Traverse Tree (Breadth first search)
    BFS(){
        let node = this.root;
        let queue = [];
        let result = [];
        // add item in queue
        queue.push(node);
        // console.log("Queue is ",queue);
        while(queue.length){
            node = queue.shift();//Dequeue item
            result.push(node.value);
            if(node.left){
                queue.push(node.left);//enqueue item
            }
            if(node.right){
                queue.push(node.right)//enqueue item
            }
        }
        return result;
    }
    // Depth first search (Pre-Order)
    dfsPreOrder(){
        let result = [];
        let current = this.root;
        function traverse(node){
            if(node){
                result.push(node.value);
                if(node.left) traverse(node.left); // first left values will be added to the result array.
                if(node.right) traverse(node.right); // then right values will be added to the result array.
            }
        }
        traverse(current);
        return result;
    }
    // Depth first search (Post-order)
    dfsPostOrder(){
        const result = [];
        const current = this.root;
        function traverse(node){
            if(node){
                if(node.left){
                    traverse(node.left);
                }
                if(node.right){
                    traverse(node.right);
                }
                result.push(node.value);
            }
        }
        traverse(current);
        return result;
    }
    dfsInOrder(){
        const result = [];
        const current = this.root;
        function traverse(node){
            if(node){
                if(node.left) traverse(node.left);
                result.push(node.value);
                if(node.right) traverse(node.right);
            }
        }
        traverse(current);
        return result;
    }

    // InOrder
    inOrder(root){
        if(!root){
            return;
        }
        this.inOrder(root.left);
        process.stdout.write(`${root.value} `);
        this.inOrder(root.right);
    }

    search(root,key){
        // Return if key is present into the bst:
        if(!root){
            return null
        }
        if(root.value == key){
            return root;
        }
        if(root.value > key){
            // Discard right part of the tree
            return this.search(root.left,key);
        }
        if(root.value < key){
            // Discard 
            return this.search(root.right,key);
        }
    }

    // delete Node from BST:
    /*
        => Deletion Can perform in following order:
            -> If Node have no child
            -> If node have 1 child
            -> If node have 2 child
    */
    deleteNode(root,key){
        if(!root){
            return null;
        }
        else if(root.value < key){
            // Search and delete in right side
            root.right = this.deleteNode(root.right,key);
        }else if(root.value > key){
            // Search and delete in left side:
            root.left = this.deleteNode(root.left,key);
        }else{
            if(root.left == null && root.right == null){
                // Node has no child
                root = null

            }else if(root.left == null){
                // Node has 1 right child
                root = root.right

            }else if(root.right == null){
                // Node has 1 left child
                root = root.left;

            }else{
                // Node has 2 child:
                /*
                    Get Inorder success of that particular tree and replace that value with the key 
                    and delete it by taking care of their children:
                    BST:
                        (15)
                        /   \
                      (9)   (30)
                     /  \     \
                    (8)  (10)  (60)
                    /
                  (7)
                  Inorder(LeftRootRight): [7 8 9 10 15 30 60]
                 Here inorder successor of 15 is 30:, inorder successor of 9 is 10: 
                */

                //Find inorder successor:
                let temp = root.right;
                while(temp.left !=null){
                    temp = temp.left;
                } 

                root.value = temp.value;
                root.right = this.deleteNode(root.right,temp.value);
            }
        }
        return root;
    }
}
const arr = [10,9,1,5,10,20,19,25,27];
// const arr = [15,10,8,12,20,16,25];
// const arr = [50,31,27,51,53,30,54,80,75,35,20,51];
// const arr = [...'qwertyuiopasdfghjklzxcvbnm']
const bst = new BinarySearchTree();
arr.forEach(item=>{
    bst.insert(item);
})
bst.inOrder(bst.root)
// console.log("Breadth first search :",bst.BFS());
// console.log("Depth first search pre-order: ",bst.dfsPreOrder());
// console.log("Depth first search post-order: ",bst.dfsPostOrder());
// console.log("Depth first search in-order: ",bst.dfsInOrder());
// console.log("bst.find(1) ",bst.find(1))
// console.log("bst.find(10) ",bst.find(10))
// console.log("bst.find(16) ",bst.find(16))
console.log("Search below: ");
// const n = bst.search(bst.root,100)
// if(n){
//     console.log("Element found",n);
// }else{
//     console.log("Element does not found")
// }
const r = bst.deleteNode(bst.root,10)
console.log("Inorder after deleting node: ")
bst.inOrder(bst.root)


