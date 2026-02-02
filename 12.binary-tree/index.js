/*
=>  Hierarchical Data Structure:
    -   A Hierarchical Data Structure organizes data in a tree-like form, where 
        each item (node) has one parent (except the root) and zero or more children.
*/
/*
===> Tree :
    -> Tree is a data structure that consists of nodes in a parent/child relationship.
    -> List: Lists are linear data structures
    -> Tree: Trees are non-linear data structures.
    -> A node can have relationships with its children and parents, not with siblings.
    -> A child can not have more than 1 parent.

===> Tree Terminology :-
    -> Root:- The top node in the tree.
    -> Child: A node directly connected to another node when moving away from the root
    -> Parent : The converse notion of a child.
    -> Siblings: Nodes which have the same parent.
    -> Leaf: Node which has no children.
    -> Edge: The connections between nodes.
    -> Ancestors : parent, grand-parents.
    -> Descendant: Below nodes of a particular node.
    -> Height: Total depth of tree
    -> Depth of a node: 
    ->  Node: anything stores the data is node.

===> Uses of tree in computer science:-
    -> HTML DOM: (Nested elements)
    -> Network routing
    -> Abstract syntax tree (e.g. consider AST of while loop)
    -> AI uses tree to make best decisions
    -> Folders in Operating Systems
    -> JSON ..etc
*/

/*
===> Types of trees:
    -> Trees
    -> Binary Trees: Can have 0, 1 or 2 children. But cannot have more than 2 children.
    -> Binary Search Trees: Binary tree + children are sorted in a particular way.
        ..etc
    -> n-ary Tree
*/

/*
==> Important Notes:
    ->  Tree problems follow a recursive structure
    ->  Tree is fairly important topic for interviews 
    ->  Mostly all problems can be solved by dividing the problem into sub-problems and making recursive 
        calls on each sub-trees iteratively.
*/

/*
=> Types of Binary Tree:
    1) Full BT:     All node have must 2 or 0 children
    2) Complete BT: 
        Conditions:
            1) All levels must be completely filled except the last level: (2^level : 0<=level<=n-1)
            2) The last level has all nodes in left as possible, must node the gap level > 1
    3) Perfect BT:
            Every Level is completely filled:
        OR,
            1) All the leaf nodes are at the same level.
            2) All non-leaf nodes must have 2 children
    4) Balanced BT:
        -   Height difference between left and right sub-tree at any node must be at max 1.
    5) Degenerate BT:
        -   Every node has a single child
*/

class Node{
    constructor(value){
        this.left = null;
        this.data = value;
        this.right = null;
    }
}
