/*
=> Deadlock and Prevention Technique:
    1) What is deadlock
    2) Four common f
*/

/*
=> What is deadlock:
    -   A deadlock is a situation in multithreaded application where two or more threads are blocked 
        forever, each waiting for the other to release the lock.

    -   Real life analogy: Trains on same track

=> Four Coffman conditions for deadlock:
    1)  Mutual Exclusion:
        -   Only one thread can own a resource at a time   
    2)  Hold and wait:
        -   A thread holds one resource and wait for another
    3)  No preemption(taking action first):
        -   A resource cannot be forcibly taken from a thread
    4)  Circular wait:
        -   A closed chain of thread exists, each waiting for next.

Note: For prevention break at least any of them.
*/

/*
=> Classic problem of deadlock: Dining philosophers:
    -   5 philosophers sit around a table, Each needs two forks to eat. If every philosopher pick up their 
        left fork at the same time, no one can pick up the right one. A deadlock.
    -   Philosophers can Eat or Think.
*/

/*
=> Deadlock prevention technique:
    -   Lock ordering (Break circular wait)
    -   Minimize nested locking (Break hold wait)
    -   Recovery strategies (More relevant to DBs)
*/