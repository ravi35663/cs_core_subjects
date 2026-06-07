/*
=> Iterator Pattern:
    -   It is behavioral design pattern.
    -   Iterator pattern allows you to traverse a collection without exposing its internal 
        structure. 
    -   Meaning:
        -   You can go through items in a playlist without knowing how they are 
            stored (array, linked list, DB,...etc)
*/

/*
=> Why do we use Iterator:
    -   Without Iterator clients need to know:
        - How data is stored
        - How to loop it
        - How navigation works
    -   This Above things creates:
        - Tight Coupling
        - Breaks encapsulation
        - Hard to change storage logic.

    - With Iterator pattern:
        - Hiding internal structure
        - Providing standard navigation
        - Support multiple traversal styles
            (Loop, reverse, shuffle ..etc)
*/

/*
=> Let's take an example of Youtube playlist:
    - We have video
    - Playlist (Collection of items)
*/