/* ===================== LISKOV SUBSTITUTION PRINCIPLE (LSP) =====================
    - Subclass objects must be replaceable with superclass objects
    - Replacing a parent with a child should not break program correctness
    - Subclasses should honor the behavior and expectations of the base class
    - Code using the base class should work the same with any subclass

In simple terms:
    -   If B extends A, then B should work anywhere A is expected. i.e, class B should always respect 
        class A without violating the behavior of class A.
*/
/*
=>  Why does LSP matter?
    => LSP violation leads to :
        -   Broken functionalities when subclasses replaces parent.
        -   Fragile inheritance hierarchies
        -   Bugs that are hard to detect
        -   Client code being tightly coupled to specific types
*/
/*
=>  How do we spot LSP violation?
    -   Subclasses throwing unexpected exceptions for base class method.
    -   subclass changes behavior so much, that the code fails
*/
/*
=> What are the key principles of LSP:
    -   Design by contact.
    -   Avoid over inheritance, use composition.
    -   Refactor early.
*/