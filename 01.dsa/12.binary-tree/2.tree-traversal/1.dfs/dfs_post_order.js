/*
===> Post-Order DFS :-
    ->  In a post-order traversal, the left subtree is visited first, followed by the right 
        subtree, and finally the root node.
    ->  The order of visitation is typically: Left -> Right -> Node.
    ->  Post-order traversal is often used for tasks like deleting a tree or to ensure that 
        the children are visited before the parent.
*/

/*
==> Examples:
        10
       /  \
      /    \
     6      15     =====> Post-Order Traversal: arr = [3,8,6,20,15,10]
    / \       \
   3   8       20
*/

/*
==> Examples:
        15
       /  \
     10    20     =====> Post-Order Traversal: arr = [8,12,10,16,25,20,15]
    / \    / \
   8  12  16  25
*/

/*
===> Steps to perform depth first search post-order:
    ->  Create an array variable which will store values.
    ->  Create a variable which will be used to hold the current value as root of the tree.
    ->  Create a helper function which can have nodes as an argument.
        ->  Inside the helper function check if node have any left property then call that helper 
            function with left property.i.e. helperFunction(node.left)
        ->  Inside the helper function check if node have any right property then call that 
            helper function with right property.i.e. helperFunction(node.right)
        -> Add node value into that variable which stores node values.
    -> invoke the helper function with the current node(root node).
    -> return that variable which has all values stored.
*/

/*
    ==> Code of DFS Post-Order :-
    dfsPostOrder(){
        const currentNode = this.root;// root of BST.
        const result = [];
        function traverse(node){
            if(node){
                if(node.left) traverse(node.left);
                if(node.right) traverse(node.right);
                result.push(node.value);
            }
        }
        traverse(currentNode);
        return result;
    }
*/