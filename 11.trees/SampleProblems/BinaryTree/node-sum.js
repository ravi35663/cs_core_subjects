/*
    Sum of Nodes
    Given a binary tree with N nodes. Your task is to return the sum of all N nodes.

    Input Format
        In the function a pointer to the root node of the binary tree is passed.
    Output Format
        Return a integer representing sum of all nodes

    input:
            (1)
            /   \
          (2)   (3)
          /  \     \
        (4)   (5)  (6)
        /
      (7)

      Output: 
       28
*/

// return sum of all node// root,left,right
function nodeSum(root){
    if(!root) return 0;
    return root.value + nodeSum(root.left) + nodeSum(root.right);
}