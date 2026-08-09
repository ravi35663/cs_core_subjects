/*
Interview Questions:
    1. Real value of retrospective: Done
    2. value of conduction in retrospective: Done
    3. what is the story point(unit) for estimations: 
        -> Done: Story Point = Complexity + Effort + Risk 
    4. what is the closures: Done

    5. var a = 1;
        function b(){
            a=10; // Global in side function b not outside of b
            return 20;
        function a(){}
        }
        b(); // 20
        console.log(a); // 1
        -> Done
        ->  First function get hoisted then  variable
    6. const obj = {
        a(){console.log(this.proto)},
        proto: 1
    }
        obj.a.proto = 2;
        obj.a()
        const fn = obj.a;
        fn()
    7. what is this keyword: 
        - Done

    8. what is typescript: 
        -   Done
    9. what are utility types in typescript:
        - Done
    10 what is SOLID principles:

    11. class vs functional components: 
        -   Done
    12. hooks: 
        -   Done
    13. useMemo vs useCallback:
        -   Done
    14. useLayoutEffect vs UseEffect:

    15. What is React fibre:
        ans: 
        -   Fiber lets React pause, resume, and prioritize rendering work
        -   React Fiber is the engine inside React that breaks rendering work 
            into small pieces, so React can pause, prioritize important updates 
            (like clicks), and keep the UI smooth instead of freezing

        -   Old React = finish the whole task before responding
            React Fiber = multitask, respond fast, finish later

    16. what is reconciliation:
        -   Reconciliation is the process where React compares the old UI with 
            the new UI and updates only the parts of the DOM that changed.

    17. need of custom hooks:
        -   Custom hooks are needed to reuse stateful logic across components 
            without duplicating code.
        -   Avoid code duplication:
                -   Same logic (API calls, auth, form handling) used in multiple 
                    components
                -   Custom hook = write once, use everywhere
        -   Clean & readable components: 
                - Components focus on UI
                - Logic moves into hooks
        -   Share stateful logic (not UI):
        -   Better maintainability:
                - Changes in one hook update all consumers
                - Easier to test and refactor


    18. What is HOC with example:
        - Done
    19. React.Memo vs useMemo:
        - React.memo: Memoizes a component
            - Prevents re-rendering a component
            - Re-renders only if props change
            - Used on components
            - Used when child is re-render even though the props are not changing.
        - useMemo:  Memoizes a value
            - Prevents recomputing expensive calculations
            - Used inside components
            - Used when computation is heavy and dependencies rarely changes.

    20. Performance optimization:
        -   React performance optimization focuses on preventing unnecessary 
            re-renders, memoizing expensive work, splitting code, and keeping 
            state as local and minimal as possible.
    21. Performance optimization tools:
        -   These tools help detect slow renders, unnecessary re-renders, large 
            bundles, browser bottlenecks, and network issues to improve React 
            app performance.

        1. React DevTools – Profiler
            →   Identifies slow components and unnecessary re-renders by showing 
                render duration and re-render reasons.

        2. Chrome DevTools (Performance & Memory tabs)
            →   Analyzes JavaScript execution, layout/paint cost, FPS drops, and 
                detects memory leaks.

        3. Lighthouse
            →   Audits overall app performance (FCP, LCP, TTI, CLS) and suggests 
                improvements for production readiness.

        4. why-did-you-render
            →   Highlights avoidable re-renders by logging why a component 
                re-rendered when props/state didn’t change.

        5. Webpack Bundle Analyzer
            →   Visualizes bundle size to find heavy dependencies and optimize 
                code-splitting and tree-shaking.

        6. React Profiler API
            →   Programmatically measures render performance for specific 
                components in production or monitoring setups.

        7. Network Tab (DevTools)
            →   Helps optimize API calls and assets by analyzing request size, 
                latency, and waterfall timing.

    22. what are state manager, what is the need of state manager and which i would prefer and why.:
        - A state manager is used to manage shared application state centrally to avoid prop drilling and ensure predictable state updates. I prefer Redux Toolkit for global state due to its scalability and strong debugging support, and React Query for server state because of built-in caching and synchronization
    
    23. is nodeJs single threaded or multithreaded: 
        - Single thready 
    24. what are the streams, and why:
        - Done

    25. duplex vs transform stream:

    26. how to improve the performance of application + (math heavy applications) + AWS:
        -   Performance = (Caching + Parallelism + Right Infra) - Blocking Code
        -   User Request
                ↓
            API (Node)
                ↓
            Redis Cache
                ↓
            SQS Queue
                ↓
            EC2 Worker (Math)
                ↓
            RDS

        -   Remember this for the optimization:
            - Cache everything
            - Parallelize work
            - Offload heavy math
            - Scale horizontally
            - Choose right EC2
            - Monitor continuously 
    26. Error handling in nodejs:
        

    27. what is middlewares:

    28. what are joins:

    29. CI/CD pipeline steps, deployment steps, + AWS:

    30. Some deployment related scenario based questions:

    31. some questions on AWS infrastructure framework (Terraform):

    32. ORM models, what is the benefit of ORM, and some related questions.
*/

var a = 1;
function b(){
    console.log("a is: ",a());
    a = 10;
    return 20;
    function a(){
        return 30
    }
}
console.log(b())
console.log(a);
/*
output:
    30 => Because first function get hoisted then variables
    20
    1
*/