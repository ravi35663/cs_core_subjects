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

