/*
=> Tortoise and Hare:
    ->  The Tortoise and Hare algorithm (also called Floyd’s Cycle Detection Algorithm) 
        is a pointer-based technique used to detect cycles in a linked list or similar 
        data structures.
*/
/*
=>  It uses two pointers:
    ->  🐢 Tortoise (slow) → moves one step at a time
    ->  🐇 Hare (fast) → moves two steps at a time
    ->  If the linked list has a cycle, both pointers will meet at some point inside the 
        loop.
    ->  If there’s no cycle, the fast pointer will reach null.
*/
// 
class Solution {
    hasCycle(head) {
        let slow = head;
        let fast = head;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                return true
            }
        }
        return false
    }
}