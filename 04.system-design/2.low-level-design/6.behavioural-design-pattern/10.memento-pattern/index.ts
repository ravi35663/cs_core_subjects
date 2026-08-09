/*
=> Memento Pattern:
    -   It is behavioral design pattern that allows an object to capture its internal state and restore it 
        later without violating encapsulation.

    -   It has three components:
        - Originator -> The object whose state we to save
        - Memento    -> An object that store the state of the original
        - Caretaker  -> The object responsible for saving and restoring the memento

    -   Think of it as undo/redo mechanism
    -   It delegates creating the state snapshots to the actual owner of the state. Hence, the original 
        class can make the snapshot since it has full access to its own state.
*/

/*
=> When to use memento pattern:
    -   You need to implement undo/redo functionality
    -   You want to preserve the encapsulation of the object's state
    -   You are handling non-trivial state history management.
*/