/*
=>  Flyweight Pattern:
    -   It is a structural design pattern which is used to minimize memory usage or 
        computational cost by sharing as much data as possible with similar object.
    
    -   Think of it as a data re-use pattern, if many objects are similar, store their 
        common data in one place and share across instances
    
    -   Flyweight is a must-know pattern for scalable systems (especially for apps like 
        Google Maps, gaming engines, UI rendering etc.)
    
    -   intrinsic(share across multiple instance) and extrinsic(Something that are keep changing) 
        attributes/properties

    -   Flyweight Pattern reduces memory usage by sharing common objects instead of 
        creating new ones repeatedly.
*/
/*
=> Why do we use Flyweight:
    - We use it when:
        -   System has large number of similar objects
        -   Memory usage become high
        -   Many objects share common data
        -   Object creation is expensive
*/
/*
=> Problem Flyweight Solves:
    -   Imaging google map: On map we have below stuff:
        -   10k Trees
        -   50k cars
        -   100k buildings
    -   If Each marker stores below stuff
        {
            icon,
            color,
            type,
            renderStyle,
            animation,
            x,
            y
        }
        then every object repeats same icon/type/color hence memory will explode.
    -   Example:
            -   All trees looks same and only differ location so why create 10k tree object?
*/