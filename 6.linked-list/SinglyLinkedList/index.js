/*
    Singly Linked list:
    -> A linked list which have nodes corrected with some link 
    -> each node consist two thing,
        1) value
        2) address of previous node or null
        	example of singly linked list:
            [5|Addr1] -->  [7|Addr2]--> [9|Addr3] --> [10|null]
                Head     								   Tail
    -> node =  [Value |  address of next node or null]
    -> Insert:- insert item at the end
    -> Pop:- remove the end item.

===> Array Vs Linked List :-
    1) In array indexes in the order which in linked list there is no indexes
    2) Insertion and Deletion can be expensive in an array while in linked list it is faster than array
    3) Quick can access any index while in linked list random access is not allowed
    4) Array consume less memory than linked list
*/

/*
==> Big(O) of singly linked List:- 
    -> Insertion :- O(1)(Beginning or end)
    -> Removal :- O(1) or O(N) (Its depends)
    -> Searching/accessing:- O(N)
*/

/*
==> Notes:-
    1) Singly linked list is an excellent alternative to arrays if we frequently require insertion and 
       deletion at the beginning.
    2) Array contains a built in index whereas linked list does not.
    3) Linked list Data structure is the foundation of data structure like stack and queue.
*/