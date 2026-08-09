/*
=> Composite Pattern:
    -   Composite Pattern lets you treat a single object and a group of objects in the 
        same way
    -   One product and bundle of products should behave the same.
    -   You should not care about it is single product or group of products.
*/

/*
=> Real life Example:
    -   You can buy a single Iphone or Combo Pack (Phone + Charger + Cover) but for 
        you, you only get price at once either of iphone or combo.

    -   You Should not care about it is single or bundle of product
*/

/*
=>  Why Do We Use Composite Pattern:
    -   Without composite pattern you must write logic for:
        - Single product
        - Bundle
        - Mega bundle
        - Combo

    - With Composite Pattern:
        - One common interface
        - Same method works for everywhere
        - No Special cases.
*/
/*
=>  Benefits of Composite Pattern:
    -   Simplicity: Same interface for all products
    -   Clean Code: No if-else
    -   Scalable: Easy to add bundles
    -   Maintainable    Less duplication
    -   OOP friendly:   Polymorphism
*/

/*
=> Structure of Composite Pattern:
    -   It has three layers:
        -   Component: Interface
        -   Leaf : Simple Item
        -   Composite:  Group
    -   Example:
        - On Amazon:
            Component: Product
            Leaf:   Mobile
            Composite:  Bundle
*/