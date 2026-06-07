/*
==> DFS In-Order:
    ->  In an in-order traversal, the left subtree is visited first, then the root node, 
        and finally the right subtree.
    -> The order of visitation is typically: Left -> Node -> Right.
    -> In binary search trees, an in-order traversal visits the nodes in sorted order.
*/

/*
==> Examples:
        10
       /  \
      /    \
     6      15     =====> In-Order Traversal: arr = [3,6,8,10,15,20]
    / \       \
   3   8       20
*/

/*
==> Examples:
        15
       /  \
     10    20     =====> In-Order Traversal: arr = [8,10,12,15,16,20,25]
    / \    / \
   8  12  16  25
*/
/*
===> Steps to perform depth first search in-order:
    -> Create an array variable which will store values.
    -> Create a variable which will be used to hold the current value as root of the tree.
    -> Create a helper function which can have nodes as an argument.
	    ->  Inside the helper function check if node have any left property then call that 
            helper function with left property.i.e. helperFunction(node.left)
        ->  Add node value into that variable which stores node values.
	    ->  Inside the helper function check if node have any right property then call that 
            helper function with right property.i.e. helperFunction(node.right)
    -> invoke the helper function with the current node(root node).
    -> return that variable which has all values stored.
*/
