/*
=> Complexity
    S.C: O(E * E)
*/
class AdjacencyMatrix{
    constructor(nodes){
        this.nodes = nodes + 1;
        this.matrix = (new Array(this.nodes)).fill(0).map((i,index)=>{
            return (new Array(this.nodes)).fill(0);
        })
    }

    addEdges(u, v, isDirected=false, weight){
        this.matrix[u][v] = weight;
        if(!isDirected){
            this.matrix[v][u] = weight;
        }
    }

    getMatrix(){
        return this.matrix;
    }
}

const nodes = 5
const aj = new AdjacencyMatrix(nodes);
aj.addEdges(1,2)
aj.addEdges(1,3)
aj.addEdges(2,4)
aj.addEdges(2,5)
aj.addEdges(3,1)
aj.addEdges(3,4)
aj.addEdges(4,3)
aj.addEdges(4,5)
aj.addEdges(5,2)
console.log("Matrix: is: ",aj.getMatrix());

/*
Output:
        1
       / \
      2   3
     /|   |
    5 4---+
     \|
      (connections)

More details:
    Node 0: (isolated)
    Node 1: ↔ 2, 3
    Node 2: ↔ 1, 4, 5
    Node 3: ↔ 1, 4
    Node 4: ↔ 2, 3, 5
    Node 5: ↔ 2, 4
*/

/*
=> Adjacency matrix:
    0  1  2  3  4
0 [ 0  0  0  0  0 ]
1 [ 0  0  1  1  0 ]
2 [ 0  1  0  0  1 ]
3 [ 0  1  0  0  1 ]
4 [ 0  0  1  1  0 ]
5 [ 0  0  1  0  1 ]
*/