/*
1) Pre-Order DFS:-
    ->  In a pre-order traversal, the root node is visited first, followed by the left 
        subtree and then the right subtree.
    ->  The order of visitation is typically: Node -> Left -> Right.
    ->  This is often used to make a deep copy of a tree, to serialize a tree, or to 
        perform any operation that needs to start from the top.
*/
/*
==> Examples:
        10
       /  \
      /    \
     6      15     =====> Pre-Order Traversal: arr = [10,6,3,8,15,20]
    / \       \
   3   8       20
*/

/*
==> Examples:
        15
       /  \
     10    20     =====> Pre-Order Traversal: arr = [15,10,3,12,20,16,25]
    / \    / \
   3  12  16  25
*/

/*
===> Steps to perform Depth first Search:-  
    -> Create a variable to store the values of the node visited.
	-> store the root value into a variable called current.
	-> create a helper function which will take a node as an argument.
		-> Push the node value into a variable which stores values.
		->  if the node has left property, call a helper function with left property
            on the node.
        ->  if the node has right property, call a helper function with right property
            on the node.
	-> invoke the helper function with the current variable.
	-> return the array of values.
*/

/*
==> Code of DFS-Pre-Order:
    dfsPreOrder(){// we have BST which have root
        let result = [];
        let current = this.root;
        function traverse(node){
            result.push(node.value);
            if(node.left) traverse(node.left); // first left values will be added to the result array.
            if(node.right) traverse(node.right); // then right values will be added to the result array.
        }
        traverse(current);
        return result;
    }
*/