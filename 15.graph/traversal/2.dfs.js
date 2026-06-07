/*
=> DFS traversal:
    - We can also call it depth - wise traversal:
*/
/*
    Input: V = 5, edges = [ [0, 1], [0, 2], [0, 3], [2, 4] ]
    Output: [0 2 4 3 1]
*/
class GraphDfsTraversal{
    constructor(vertex, edges){
        this.v = vertex;
        this.edges = edges;
    }
    traversal(){
        const node = 0;
        let visited_nodes = {};
        let result = [];
        this.dfs(node, visited_nodes, result, this.createAdjacencyList());
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

    dfs(node, visited_nodes, result, adjList){
        // Always mark visited when pushing
        visited_nodes[node] = true;
        result.push(node);
        for(let item of adjList[node]){
            if(!visited_nodes[item]){
                this.dfs(item, visited_nodes, result, adjList);
            }
        }
    }
}


const V = 5, edges = [ [0, 1], [0, 2], [0, 3], [2, 4] ];
const t = new GraphDfsTraversal(V, edges);
const r = t.traversal();
console.log("Result is: ",r);