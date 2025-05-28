const Queue = require("./Queue/queue-with-array");

/*
   ==> Build a binary-tree from level order input, -1 input represent null:
   
   Input:   
   const arr = [1,2,3,4,5,-1,6,-1,-1,7,-1,-1,-1,-1,-1,-1]
   Output:
         (1)
        /   \
      (2)   (3)
      /  \     \
    (4)   (5)  (6)
         /
       (7)
*/
class Node{
  constructor(val){
    this.left = null;
    this.right = null;
    this.value = val;
  }
}


// const Queue = require("../../Queue/queue-with-array");


function levelOrderBuild(arr){
    if(arr[0] == -1) return null;
    let index = 0;
    const root = new Node(arr[index++]);
    const q = new Queue(100);
    q.push(root);

    while(q.cs != 0 && index < arr.length){
      const item = q.viewFront();
      q.pop();

      const leftVal = arr[index++];
      const rightVal = arr[index++];

      if(leftVal != -1){
        item.left = new Node(leftVal);
        q.push(item.left);
      }

      if(rightVal != -1){
        item.right = new Node(rightVal);
        q.push(item.right)
      }
    }
    return root
}

// Level Order Traversal:
function levelOrderTraversal(root){
    const q = new Queue(100);
    q.push(root);
    q.push(null);
    while(q.cs !=0 ){
        const item = q.viewFront();
        q.pop();
        if(item){
            process.stdout.write(`${item.value} `)
            if(item.left){
                q.push(item.left)
            }
            if(item.right){
                q.push(item.right)
            }
        }else{
            console.log();
            if(q.cs != 0){
                q.push(null)
            }
        }
    }
}
const arr = [1,2,3,4,5,-1,6,-1,-1,7,-1,-1,-1,-1,-1,-1]
const root = levelOrderBuild(arr);
levelOrderTraversal(root);
// console.log("Root is: ",root);
