/*
==> What is Stale State in React:
    ->  Stale state means using an outdated (old) value of state instead of the 
        latest one.
    ->  This usually happens because state updates in React are asynchronous and 
        closures capture old values.
*/

/*
1) Basic Example (Common Mistake):
    const [count, setCount] = React.useState(0);

    function increment() {
        setCount(count + 1); // 1
        setCount(count + 1); // 1
    }

    Expected: count = 2
    Actual: count = 1
    Why:
        Both updates read the same old count value
        React batches updates
        Result → stale state
    Correct Way (Functional Update):
        function increment() {
        setCount(prev => prev + 1); // 1
        setCount(prev => prev + 1); // 2
    }
    Always uses the latest state
    Prevents stale state
*/

/*
==> Stale State with setTimeout:
    const [count,setCount] = useState(0)
    function handleClick() {
        setTimeout(() => {
            console.log(count);
        }, 2000);
    }

    // Problem:
        1) count is captured at render time
        2) Even if state changes → timeout logs old value

    Fix Using useRef:
        const countRef = React.useRef(count);

        React.useEffect(() => {
            countRef.current = count;
        }, [count]);

        setTimeout(() => {
            console.log(countRef.current);
        }, 2000);
*/

/*
==> When Stale State Commonly Happens:
    1) setTimeout, setInterval
    2) Event listeners
    3) useEffect with wrong dependencies
    4) Multiple setState calls
    5) Async callbacks / API responses
*/

/*
    Note: 
        Stale state in React occurs when a component uses an outdated data of a state, usually due to 
        closures or asynchronous state updates.
*/