/*

Question 1: Parallel Task Scheduling in a CI/CD Pipeline
Real-world Scenario: In modern software development, a Continuous Integration/Continuous 
Deployment (CI/CD) pipeline automates the building and testing of code. A project is 
often composed of multiple modules or microservices. Some modules must be built before 
others (e.g., a shared library must be built before the services that use it), while 
others can be built in parallel. Given a set of build tasks, their dependencies, and the 
time each task takes, you need to find the minimum time required to complete all builds 
using a limited number of parallel build agents (workers).

Problem Statement: You are given a list of build tasks, represented as a DAG where nodes 
are 
tasks and edges are dependencies. 
You are also given the duration for each task and a number k representing the number of 
available parallel build agents. A task can only start when all its dependencies are 
completed. An agent can only work on one task at a time.
Calculate the minimum time required to complete all tasks.
Input:
tasks: An array of objects, where each object has an id and a duration in minutes. 
[{ "id": string, "duration": number }]

dependencies: 
An array of pairs representing dependencies, where [A, B] means task B depends on task A. 
[string, string][]

k: An integer representing the number of parallel build agents.

Output: An integer representing the total minimum time in minutes.
Example:
Input:
tasks = [
  { id: "lib", duration: 10 },
  { id: "serviceA", duration: 5 },
  { id: "serviceB", duration: 8 },
  { id: "apiGateway", duration: 3 },
  { id: "ui", duration: 12 }
];

dependencies = [
  ["lib", "serviceA"],
  ["lib", "serviceB"],
  ["serviceA", "apiGateway"],
  ["serviceB", "apiGateway"],
  ["apiGateway", "ui"]
];
k = 2; // 2 parallel build agents

Expected Output: 26
Explanation:
Time 0-10: Agent 1 builds lib (10 min). Agent 2 is idle.
Time 10-18: lib is done. Agent 1 builds serviceB (8 min). Agent 2 builds serviceA (5 min).
Time 18-21: serviceA and serviceB are done. Agent 1 builds apiGateway (3 min). Agent 2 is idle.
Time 21-33: apiGateway is done. Agent 1 builds ui (12 min). Agent 2 is idle.
Total time would be 33 minutes. But we can optimize.
Correct schedule:
T=0: Start lib (Agent 1).
T=10: lib finishes. Start serviceA (Agent 1) and serviceB (Agent 2).
T=15: serviceA finishes. Agent 1 is free. serviceB is still running.
T=18: serviceB finishes. Agent 2 is free. Now apiGateway can start. Start apiGateway (e.g., Agent 1).
T=21: apiGateway finishes. Now ui can start. Start ui (e.g., Agent 1).
T=33: ui finishes. Total time = 33.
Wait, let me re-calculate the critical path. Longest path by duration is 
lib -> serviceB -> apiGateway -> ui = 10 + 8 + 3 + 12 = 33. With infinite agents, the 
time is 33. With 2 agents, it should still be 33. Let me re-think the example.
Let's try a better example for parallel execution. A(5), B(5), C(10), D(5). A->C, B->C, 
C->D. k=2.
T=0: Start A (Agent 1), B (Agent 2).
T=5: A and B finish. Start C (Agent 1).
T=15: C finishes. Start D (Agent 1).
T=20: D finishes. Total time = 20. If k=1, time would be 5+5+10+5 = 25.
Let's use this logic for the original example.
T=0: Start lib (Agent 1).
T=10: lib finishes. Start serviceA (Agent 1) and serviceB (Agent 2).
T=15: serviceA finishes. Agent 1 is free. serviceB has 3 mins left.
T=18: serviceB finishes. Both serviceA and serviceB are done. apiGateway can start. 
Start apiGateway (Agent 1).
T=21: apiGateway finishes. ui can start. Start ui (Agent 1).
T=33: ui finishes. Total time is 33.
The complexity comes from choosing which available task to run when more than k tasks are 
ready. A greedy approach (e.g., longest duration first) is a good heuristic.
*/

/*
Question 2: Finding the "Merge Base" in a Version Control System
Real-world Scenario: Version control systems like Git model commit history as a DAG. 
Each commit is a node, pointing to its parent(s). When you merge two branches, Git needs 
to find the best common ancestor commit to use as the "merge base". This is the point 
from which the two branches diverged. Finding this efficiently is crucial for a three-way 
merge.
Problem Statement: Given a list of commits representing a repository's history and two 
specific commit IDs (commitA and commitB), find their lowest common ancestor(s) (LCA). 
A commit can have multiple parents (in the case of a merge commit). Because of multiple 
parents, two commits might have more than one LCA. You should return all of them.
Input:
commits: A list of objects, each with a commit id and a list of its parent_ids. The 
first commit has no parents. [{ "id": string, "parent_ids": string[] }]
commitA: The ID of the first commit.
commitB: The ID of the second commit.
Output: An array of strings containing the IDs of all lowest common ancestors.
Example:
Input:
commits = [
  { id: "A", parent_ids: [] },
  { id: "B", parent_ids: ["A"] },
  { id: "C", parent_ids: ["A"] },
  { id: "D", parent_ids: ["B"] },
  { id: "E", parent_ids: ["C"] },
  { id: "F", parent_ids: ["D", "E"] }, // Merge commit  { id: "G", parent_ids: ["B"] },
  { id: "H", parent_ids: ["G", "F"] } // Merge commit
];
commitA = "D";
commitB = "E";
 
Expected Output: ["A"]
Another Example:
Input:
// Same commits listcommitA = "G";
commitB = "F";
Expected Output: ["B"]
Complex Example:
      A
     / \
    B   C
   / \ / \
  D   E   F
   \ / \ /
    G   H
     \ /
      I
If you are looking for the LCA of I and D, it's B. If you are looking for LCA of G and H, 
they are D, E, and F. The lowest would be D, E, F.
Let's use a clearer example for multiple LCAs.
      A
     / \
    B   C
   / \ / \
  D   E   F
  |   |   |
  G   H   I
Here, LCA(G, H) is B. LCA(H, I) is C. LCA(G, I) is A.
Let's create a graph with multiple LCAs.
      A
     / \
    B   C
     \ /
      D
     / \
    E   F
LCA(E, F) is D.
      A
     / \
    B   C
   |   |
   D   E
    \ /
     F
LCA(D, E) are B and C. This is a better example.
Input:
commits = [
  { id: "A", parent_ids: [] },
  { id: "B", parent_ids: ["A"] },
  { id: "C", parent_ids: ["A"] },
  { id: "D", parent_ids: ["B"] },
  { id: "E", parent_ids: ["C"] },
  { id: "F", parent_ids: ["D", "E"] }
];
commitA = "D";
commitB = "E";
 
Expected Output: ["A"] (This is not right, B and C are ancestors of D and E respectively. 
  The common one is A).
Let's try again. path(D) = [D, B, A]. path(E) = [E, C, A]. The first common node is A.
Let's try commitA = "F", commitB = "C". path(F) = [F, D, B, A] and [F, E, C, A]. path(C) 
= [C, A]. The common ancestors are C and A. C is lower than A. So LCA is C. This seems 
tricky.
The definition of LCA is the lowest node that has both nodes as descendants. For D and E, 
their ancestors are {B, A} and {C, A}. The intersection is {A}. So A is the only common 
ancestor, thus it is the LCA.
For F and C, ancestors of F are {D, E, B, C, A}. Ancestors of C are {A}. Wait, C is an 
ancestor of F. In this case, the LCA is C itself.
The problem is interesting when there's no direct ancestor relationship. The first 
example LCA(D, E) -> A is a good one. The second one LCA(G, F) -> B is also good. The 
problem is well-defined.
 
*/

/*
Problem Statement Given a list of nodes representing a directed acyclic graph 
(or a tree structure), where each node has an id and a list of its children's ids, 
write a function to find all the "leaf" nodes.
A "leaf" node is defined as a child node that does not appear as a parent id in the input 
list. The traversal should start from the first node in the input array, which can be 
considered the root of the graph.
The function should take the list of nodes as input and return a flat array of strings 
containing the ids of all the leaf nodes found by traversing the graph from the root.
Input: An array of objects, where each object represents a node in the graph: [{ "id": string, "children": string[] }]
Output: An array of strings: string[]
M1 -> R1, R2
M2 -> R3, R4, M5
M3 -> R10, R11
M5 -> R45, R57
Input:
[
  { "id": "C1", children: ["M1", "M2", "M3"] },
  { "id": "M1", children: ["R1", "R2"] },
  { "id": "M2", children: ["R3", "R4", "M5"]},
  { "id": "M3", children: ["R10", "R11"] },
  { "id": "M5", children: ["R45", "R57"] }
]
Expected output:
["R1", "R2", "R3", "R4", "R45", "R57", "R10", "R11"]
// Sample 2
A -> B, C
B -> D
C -> E, F
Input:
[
  { "id": "A", "children": ["B", "C"] },
  { "id": "B", "children": ["D"] },
  { "id": "C", "children": ["E", "F"] }
]

Expected output:
["D", "E", "F"]
// Sample 3
ROOT -> L1_A, L1_B
L1_A -> L2_A, L2_B
L1_B -> L2_C
L2_B -> LEAF_1, LEAF_2
L2_C -> LEAF_3
Input:
[
  { "id": "ROOT", "children": ["L1_A", "L1_B"] },
  { "id": "L1_A", "children": ["L2_A", "L2_B"] },
  { "id": "L1_B", "children": ["L2_C"] },
  { "id": "L2_B", "children": ["LEAF_1", "LEAF_2"] },
  { "id": "L2_C", "children": ["LEAF_3"] }
]
Expected output:
["L2_A", "LEAF_1", "LEAF_2", "LEAF_3"]
// Sample 4 (Empty children)
X -> Y, Z
Y -> 
Z -> P
Input:
[
  { "id": "X", "children": ["Y", "Z"] },
  { "id": "Y", "children": [] },
  { "id": "Z", "children": ["P"] }
]
Expected output:
["P"]
*/