/* ===================== LISKOV SUBSTITUTION PRINCIPLE (LSP) =====================
    - Subclass objects must be replaceable with superclass objects
    - Replacing a parent with a child should not break program correctness
    - Subclasses should honor the behavior and expectations of the base class
    - Code using the base class should work the same with any subclass

In simple terms:
<<<<<<< HEAD:low-level-design/2.solid-principle/3.lsp/lsp.ts
    -   If B extends A, then B should work anywhere A is expected
    -   that is, class B should always respect class A without violating the behavior 
        of class A.
=======
    - If B extends A, then B should work anywhere A is expected
>>>>>>> 9e46882b86053f15d26c23007b1fa3a86532a8c3:2.low-level-design/2.solid-principle/3.lsp/index.ts
*/
/*
=> Liskov Substitution Principle (LSP):
    -   This is 'L' stand in 'SOLID'
    -   If S is a subtype of T, then objects of T may be replaced with objects of S 
        without altering any of the desirable properties of that program.
<<<<<<< HEAD:low-level-design/2.solid-principle/3.lsp/lsp.ts
        
=======

>>>>>>> 9e46882b86053f15d26c23007b1fa3a86532a8c3:2.low-level-design/2.solid-principle/3.lsp/index.ts
    Simple Term:
        -   If class B is a subtype of class A, then you should be able to use B 
            anywhere you used A, and the behavior should remain same.
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