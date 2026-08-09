import React, { useCallback, useEffect, useState } from "react"
import Child1 from "./Child1"
import Child2 from "./Child2"
const UseCallback = ()=>{

    const [count,setCount] = useState(0);

    const increment = ()=>{
        setCount(count+1);
    }

    const handleChild1 = useCallback(()=>{
        // its will always show the initial value of count because on each re-rendering this function is memoised
        console.log('handleChild1',count);
    },[]);

    const handleChild2 = useCallback(()=>{
        // on each re-render this function is getting created but not getting called unless you called this function
        console.log('Handle child 2',count);
    },[count])

    useEffect(()=>{
        // this will automatically called when count value is changed
        console.log("Count in useEffect ",count);
    },[count]);

    return <div>
        <button onClick={increment} style={{backgroundColor:"green"}}> Toggle </button>
        <Child1 handleChild1={handleChild1}/>
        <Child2 handleChild2={handleChild2}/>
        <h1>Count Value: {count}</h1>
    </div>
}

export default UseCallback;

/*
=>useCallback:
    ->  'useCallback' is a react hook which is used for memoisation of functions.
    ->  useCallback return a memoised version of callback function that only changes if 
        any dependencies of that callback is changed.
    ->  This can be particularly useful for optimizing performance in certain scenarios.

    => Used for performance optimization:-
        If a parent component is re-rendered , all of its child component is re-rendered 
        too, the functions passed into the children components are changed on parent 
        rendered because every render a new function is created. But with the help of 
        'useCallback' the function will be memoised and hence if parent component is 
        changed then child component won't changes because the prop function of child 
        components won't changes(). callback function only changed if any dependencies of 
        that callback is changed.

    => Avoiding unnecessary rendered.
        ->  Especially when there are complex calculations or prop function passed to a 
            child component.
        ->  It prevent unnecessary child rendering if parent component is re-rendered.
*/