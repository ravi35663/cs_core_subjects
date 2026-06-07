/*
===> Breadth first search(BFS) :-
    -> Breadth first search (BFS) is an algorithm that searches tree or graph data structures.
    -> It starts at the root of the tree or graph and explores all nodes at the current 
       depth level before moving on to nodes at next depth level.

===> BFS is used to solve many problems, including:-
    -> Finding shorted path in the graph
    -> Processing digital images.
    -> Social Network Analysis:
        1) Friend Recommendations:
        2) Community Detection: 
    -> Web Crawlers:
        1) Searching the Web:
    -> Broadcasting in Networks: 
    -> Peer-to-Peer Networks:
        1) File Sharing:
    -> 
*/

/*
===> Steps to breadth first search:
	-> Create a queue (this can be an array or linked list) and an array/linked-list
        variable to store the values of nodes visited.
	-> Place the root node into the queue.
	-> Loop as long as there is anything in the queue.
		-> Dequeue a node from the queue and push the value of the node into the variable
            that stores the nodes.
		-> if there is a left property on the node dequeued, add it into the queue.
		-> if there is a right property on the node dequeued, add it to the queue.
	-> return the array/linked-list variable that stores the values.
*/

/*
===> BFS code of Binary search tree:
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
*/ 