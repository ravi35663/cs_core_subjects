/*
=> Visitor Pattern:
    -   It is a behavioral design pattern that lets you add new operation to exiting class hierarchy without 
        modifying the classes themselves.
    -   It achieve this by moving the logic of the operation into a separate class vision.
    -   The element classes defines an accept(visitor) method and the visitor class defines a visit(element) 
        method for an each element type.
    -   
    -   Key Idea -> decouple operations from the objects on which they operate
    -   Concept of double dispatch is used. During runtimes, it resolve the item type and the itemVisitor 
        type.

    -   Element and Visitor
*/

/*
=> When do we use visitor pattern:
    -   You have a complex object structure and want to perform unrelated operations on the elements
    -   You want to add operations without modifying the element classes
    -   You have to distinct types of elements and each requires different logic
    -   Avoid if object structure changes frequently.
*/