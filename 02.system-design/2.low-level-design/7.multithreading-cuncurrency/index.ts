/*
=>  Program: 
        -  A program is an executable files (Lines of code)(chrome.exe)
=>  Process: 
        -  A process is an executing instance of a program. (Own memory, program counter & system resources)
=>  Thread: 
        -  Thread is the smallest executable unit of a process. Thread are sub-tasks of processes. All thread 
           can access shared memory.
*/

/*
=> What are cores in CPU?
    -   A core is an individual processing unit inside your CPU, capable of executing instructions 
        independently.  It is like mini CPU inside the CPU.
    -   Example: 8 Core CPU means, can handle 8 instructions at the same time.
    -   Years           Cores
        1990s           1-core CPUs
        2000s           2-core CPUs(dual)
        2010s           4-6 core CPUs
        Today           16-32s cores
    -   One thread at a time per core / or more with hyper threading.
*/

/*
=> What is context switching?
    -   Context switching is the process where the CPU stops executing one thread or process, save its state 
        and switch to another.

=>  How a context switch happens?
    -   The CPU saves the current thread's context.
    -   Loads the next thread's context
    -   Resume execution of new thread

    -- Switching is managed by the thread scheduler inside the system.
        - Takes time to save/load state
        - performance degradation due to high threads
*/

/*
=> What is multithreading?
    -   Multithreading is the ability of a program to run multiple threads (independent tasks) concurrently, 
        either truly in parallel(multi-cores) or via context switching(single core).
    -   Parallel: when core == tasks
    -   Concurrently: when core < tasks

    -   Each thread:                            Why Use?
        - Run independently                     - Better performance
        - Shares the same memory space          - Non-blocking
        - Perform a specific task               - Resource sharing
                                                - Scalability in backend services

    -   Example:
        - Uber -> Trip matching, ETA calculation, pricing ..etc these service can be performed on different threads.
*/

/*
=> What is concurrency:
    - Multiple tasks making progress over time, but not necessarily at the same exact time.
    - Can work with one core
    - Tasks appear to run at the same time
    - Focus is on the structure, on how to do many things

=> What is parallelism:
    - Means multiple tasks executing at the exact same time on multiple core
    - Can work with multiple core
    - Tasks actually runs at the same time
    - Focus is on execution, how to finish many things  
*/

/*
=> Process :                                      => Thread:
    - Independent program in execution              - Sub-unit of a process      
    - Has its own memory                            - Share memory with other threads in process
    - Fully isolated                                - Not isolated
    - Communication is complex (IPC, Sockets)       - Easy (Shared memory)
    - Overhead is heavy                             - Overhead is light
    - One process crash does not affects others     - One thread crash may affect others
    - Example: postgresql                           - chrome tabs, Uber Backend
*/

/*
=> When to use thread and process?:
    => Thread:                                  Process:
        - Tasks needs to share data             - Tasks require isolation
        - Low overhead is important             - One crash should not affect other
        - Tasks are part of the same logic      - Security boundaries needed
        - High performance needed               - Different tech stacks
        - Tightly coupled behavior              - Resource limit needed
        - Responsiveness is key                 - Used by different users
*/

/*
=> Fault tolerance and Isolation:
    - It is the ability of the system to continue operating correctly, even when some of the components fails.
    - It detect, contains and recover from failure without affecting users experience.
    - Real life: A plane
    - Redundancy
    - Graceful degradation
    - Self healing
    - Error containment

=> Isolation:
    - It means keeping different components or tasks independently from each other so that action or 
      failures do not affect each others.
    - Design strategy to ensure that the components are sandboxed from each other.
    - Memory separations, failure containment
    - Security boundaries, predictable behavior.
*/