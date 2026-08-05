/*
=> BFS traversal:
    - We can also call it level-wise traversal:
    - We can also call it breadth-wise traversal:
*/
/*
    Input: V = 5, edges = [ [0, 1], [0, 2], [0, 3], [2, 4] ]
    Output: [0, 2, 3, 1, 4]
*/
class GraphBfsTraversal{
    constructor(vertex, edges){
        this.v = vertex;
        this.edges = edges;
    }
    traversal(){
        let visited_nodes = {};
        let result = [];
        const adjList = this.createAdjacencyList()
        console.log("Ad list: ",adjList);
        for(let i=0; i<this.v; i++){
            if(!visited_nodes[i]){
                console.log("Node is: ",i)
                this.bfs(i, visited_nodes, result, adjList);
            }
        }
        return result;
    }
    createAdjacencyList(){
        const adjList = (new Array(this.v).fill(0)).map(item=> []);
        for(let edge of this.edges){
            adjList[edge[0]].push(edge[1]);
            adjList[edge[1]].push(edge[0])
        }
        return adjList;
    }

    bfs(node,visited_nodes, result, adjList){
        // Always mark visited when pushing
        visited_nodes[node] = true;
        let q = [node];
        while(q.length){
            node = q.shift();// we can replace it with 
            result.push(node);
            // Add neighbors of node into q:
            for(let n of adjList[node]){
                if(!visited_nodes[n]){
                    // Always mark visited when pushing
                    visited_nodes[n] = true;
                    q.push(n);
                }
            }
        }
        return result;
    }
}


const V = 5, edges = [ [0, 1], [0, 2], [0, 3], [2, 4], ];
const t = new GraphBfsTraversal(V, edges);
const r = t.traversal();
console.log("Result is: ",r);