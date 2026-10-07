/*
==================== SINGLY LINKED LIST ====================
Singly Linked List:
    - A linked list where nodes are connected using links.
    - Each node contains:
        1) Value
        2) Address of the next node (or null)

    Example:
        [5|Addr1] → [7|Addr2] → [9|Addr3] → [10|null]
          Head                                  Tail

    - Insert → Add an item, usually at the end.
    - Pop    → Remove the last item.


==================== ARRAY vs LINKED LIST ====================

    1) Array has indexes; Linked List has no indexes.
    2) Array insertion/deletion can be expensive; Linked List is faster when inserting/removing at the 
        beginning.
    3) Array supports random access; Linked List requires sequential access.
    4) Array generally uses less memory; Linked List needs extra memory for links.


==================== BIG-O ====================
    - Insertion      → O(1) at beginning; O(1) at end if Tail is maintained.
    - Removal        → O(1) or O(N), depending on the position.
    - Search/Access  → O(N)

==================== KEY NOTES ====================
    1) Linked List is useful when frequent insertion/deletion is needed, especially at the beginning.
    2) Array has built-in indexes; Linked List does not.
    3) Linked Lists are commonly used to build Stack and Queue.
*/
