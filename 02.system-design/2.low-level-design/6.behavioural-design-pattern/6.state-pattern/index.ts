/*
=> State Patterns:
    -   It is a behavioral design pattern that let's am object change its behavior when its internal state 
        changes.
    -   It helps to encapsulate state-specific logic into separate classes.
    -   It also follow the OCP, states can be added without modifying the existing code.
*/

/*
=> When do we use State Patterns?
    -   Whenever the object's behavior depends on its internal state
    -   State transitions are well defined and finite
    -   You want to avoid complete if-else or switch case statements
    -   State transitions should be explicit
    -   You want each state to have its own behavior and rules
*/
/*
=>  State Vs Strategy Pattern:
=> State:
    -   Intent: Changing behavior based on object's internal state
    -   Dependency: State can be dependant as you can easily jump from one state to another
    -   Final Result: It is about doing different things based on the state, hence the results may vary
    -   Usages: workflow models, lifecycle processes, UI states

=>  Strategy:
    -   Intent:     Select an algorithm or behavior at runtime based on context.
    -   Dependency: Are completely independent and are unaware of each other.
    -   Final Result:   They can end up having the same result.
    -   Usage:  Algorithm selections, formatting, sorting.
*/
