/*
=>  Prototype Pattern:
    -   It is a ceeational design pattern used when then creation of an object 
        is costly or time consuming, and we want to clone objects instead of 
        creating new ones from  the scratch.

    -   Prototype Pattern is very useful when object creation is expensive and 
        you want fast copies.
*/
// In simple term:
// Instead of doing this every time: new HeavyObject()

// We can do: prototype.clone()
/*
=> When should we use prototype pattern:
    -   When object creation is expensive (db calls, expensive computation)
    -   When a system should be independent on how its products are created
    -   When you need to create a large number of similar objects with slight 
        modification.
    -   Prototype avoids EXPENSIVE INITIALIZATION, NOT object creation.
*/
/*
=>  When Do We Need It:
    - Object creation is very slow
    - Object has complex setup
    - Same configuration repeats
    - You need many similar objects with few changes.
*/
/*
=> Real world examples where we use it:
    - PDF Template
    - Email Template
    - Game characters
    - Report template
    - Invoice template
*/
