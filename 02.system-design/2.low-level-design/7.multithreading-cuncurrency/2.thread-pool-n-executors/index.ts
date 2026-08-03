/*
=> Why not creates threads manually:
    -   Thread Explosion:   OS cannot handle that many requests at the same time.
    -   Memory Issue:   Each thread takes 1MB of memory stack by default.
    -   Thread leaks:   Threads where created but never terminate properly
    -   Context Switching overhead: CPU spends more time switching between threads that doing really works

=>  Better Approach: use thread-pools
    -   Use a pool of worker threads that are reused
    -   Real life analogy:
        Instead of hiring multiple chefs, use a fixed team to fulfil orders. So that you
*/