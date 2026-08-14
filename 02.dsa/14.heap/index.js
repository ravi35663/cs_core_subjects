/*
=> Heap:
    -   A heap is a tree-based data structure that's used in algorithms like Dijkstra's algorithm and 
        heap sort. 
    -   Heap is like tree. Everything applied to a tree will apply to the heaps.
*/
/*
=> BinaryHeaps:
    -   Binary heap is similar to binary search tree, but there are some different rules that is order 
        of sibling nodes are not considered as binary search tree.

    -   Max and Min Binary heaps are two type of binary heaps.

    -   Binary Heaps are very useful data structures for sorting, and implementing other data 
        structure like priority queue.

    -   With a little bit of math we can represent heaps using array/list.
*/

/*
=>  Complete Binary tree:
    - Every node apart from root and leaf, must have 2 nodes
*/
/*
=> Almost complete Binary tree:
    -   Every node from the nodes from the last and second last from leaf node must be complete 
        binary tree.
    -   The leaf node must be from left to right.
        10
       /   \
      9     8
     / \   
    5   6 
*/
/*
=> BigO of BinaryHeap:
    -   TimeComplexity
        -   Insertion: O(LogN)
        -   Deletion: O(LogN)
        -   Search: O(N)
*/
/*
=> MaxBinaryHeap:
    -   Each parent has at most two children
    -   The value of parent node is always greater than its children nodes, but there is no guarantee 
        of sibling node order.
        
    -   A binary heap is as compact as possible. All the children of each node are as full as they can 
        be and left children are filled out first.

    -   Example of maxBinaryHeap:
        10
       /   \
      9     8
     / \   / \
    5   6 3   1
*/  

/*
=> MinBinaryHeap:
    -   Each parent has at most two children
    -   The value of parent node is always less than its children nodes, but there is no guarantee of 
        sibling node order.

    -   A binary heap is as compact as possible. All the children of each node are as full as they 
        can be and left children are filled out first.
        
    -   Example of MinBinaryHeap:
        1
      /   \
     3     6
    / \   / \
   5   9 8  10
*/ 
/*
    ->  If number of nodes in binary tree is n then index of leaf node is: [n/2 to n-1]
    ->  index of internal nodes (nodes before leaf node):[ 0 to (n/2) - 1]
*/
/*
=> Why do we need heaps?
    -   Binary Heaps are used to implements priority queues, which are very common used data
        structure.
    -   Binary heaps are also used for graph-traversal algorithms.
*/