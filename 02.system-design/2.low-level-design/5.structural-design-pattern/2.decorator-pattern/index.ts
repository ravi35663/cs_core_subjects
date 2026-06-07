/*
=> Decorator Pattern:
    -   It is a structural design pattern that allows you to add new behavior to 
        objects dynamically at runtime without modifying their original structure.
*/

/*
=> What kind of problem does decorator pattern solve?
    - We don't want to change existing class
    - We want to avoid creating too many subclasses
    - We need dynamic feature combination
*/

/*
=> Without Decorator:
    Pizza
        ├── CheesePizza
        ├── CheeseOlivePizza
        ├── CheeseOliveMushroomPizza
        ├── CheesePaneerPizza
        ├── CheeseOlivePaneerPizza
*/

/*
=> With Decorator:
    - We combined dynamically
        Pizza + Cheese + Olive + Mushroom
*/