/* ===================== OPEN–CLOSED PRINCIPLE (OCP) =====================
    - Software entities (classes, modules, functions) should be:
        -   Open for extension
        -   Closed for modification
    - New behavior should be added without changing existing code
    - Helps avoid breaking already tested functionality
    - Improves scalability and maintainability

Example:
    - Add new features using inheritance or composition
    - Existing code remains unchanged
*/
/*
=>  Open Close Principle: 
    -   This is 'O' of SOLID principle
    -   Software entities (classes, modules & functions) should be open for extension and closed for 
        modification.
    -   You should be able to add new behavior to a class or module which is only through extension without 
        changing its code.
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