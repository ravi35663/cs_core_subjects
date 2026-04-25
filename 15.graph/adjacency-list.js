/*
=> Complexity
    S.C: O(2E)
*/
class AdjacencyList{
    constructor(nodes){
        this.nodes = nodes + 1;
        this.matrix = (new Array(this.nodes)).fill(0).map(item => []);
        
    }

    addEdges(u, v,weight){
        this.matrix[u].push([v,weight]);
    }


    getList(){
        return this.matrix;
    }
}
const nodes = 5
const aj = new AdjacencyList(nodes);
aj.addEdges(1,2)
aj.addEdges(1,3)
aj.addEdges(2,1)
aj.addEdges(2,4)
aj.addEdges(2,5)
aj.addEdges(3,1)
aj.addEdges(3,4)
aj.addEdges(4,3)
aj.addEdges(4,2)
aj.addEdges(4,5)
aj.addEdges(5,2)
aj.addEdges(5,4)
console.log("Matrix: is: ",aj.getList());

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
[
  [],           // Node 0 (isolated)
  [2, 3],       // Node 1 → 2, 3
  [1, 4, 5],    // Node 2 → 1, 4, 5
  [1, 4],       // Node 3 → 1, 4
  [3, 2, 5],    // Node 4 → 3, 2, 5
  [2, 4]        // Node 5 → 2, 4
]
*/