/* ===================== OPEN–CLOSED PRINCIPLE (OCP) =====================
    - Software entities (classes, modules, functions) should be:
<<<<<<< HEAD:low-level-design/2.solid-principle/2.ocp/open-close.ts
        - Open for extension
        - Closed for modification
=======
        -   Open for extension
        -   Closed for modification
>>>>>>> 9e46882b86053f15d26c23007b1fa3a86532a8c3:2.low-level-design/2.solid-principle/2.ocp/index.ts
    - New behavior should be added without changing existing code
    - Helps avoid breaking already tested functionality
    - Improves scalability and maintainability

<<<<<<< HEAD:low-level-design/2.solid-principle/2.ocp/open-close.ts
    - Example:
        - Add new features using inheritance or composition
        - Existing code remains unchanged
=======
Example:
    - Add new features using inheritance or composition
    - Existing code remains unchanged
>>>>>>> 9e46882b86053f15d26c23007b1fa3a86532a8c3:2.low-level-design/2.solid-principle/2.ocp/index.ts
*/
/*
=>  Open Close Principle: 
    -   This is 'O' of SOLID principle
    -   Software entities (classes, modules & functions) should be open for extension 
        and closed for modification.
<<<<<<< HEAD:low-level-design/2.solid-principle/2.ocp/open-close.ts

    -   You should be able to add new behavior to a class or module which is only 
        through extension without changing its code.
=======
    -   You should be able to add new behavior to a class or module which is only through 
        extension without changing its code.
>>>>>>> 9e46882b86053f15d26c23007b1fa3a86532a8c3:2.low-level-design/2.solid-principle/2.ocp/index.ts
*/

/*
=>  Real life analogy of Open close principle:
    -   Take example of 'Adaptor'(Mac-book-adapter)
*/
/*
=>  When should be apply OCP?
    -   When you have business rules that are likely to change or expand
    -   When you have building a plug-in system
    -   When your codebase is becoming a "God Class" with a lot conditions.
*/
/*
=>  Misconceptions about OCP:                       Reality:
    -   OCP means never touching the old code       - No, you can refactor old code to support ocp
    -   OCP leads to move classes, so it's an       - Extra classes are fine if they improve maintainability
        over kill
    -   It makes code harder to read                - Not if done right, you gain flexibility
*/  