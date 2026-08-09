import { useMemo, useState } from "react";
const heavyCalculation  = (count)=>{
    console.log("heavyCalculation is called");
    return 10 * count;;
}


const UseMemo = ()=>{
    const [count,setCount] = useState(0);
    const increment = ()=> setCount(count+1);
    // If useMemo is not implemented then on each re-render heavyCalculation happens again and again.
    const heavyCalculationMemoized = useMemo(()=>{
        console.log("useMemo without dependencies");
        return heavyCalculation(count);
    },[]);
    
    const heavyCalculationMemoized2 = useMemo(()=>{
        console.log("useMemo with dependencies");
        return heavyCalculation(count);
    },[count]); // value will be update on each change of count value

    console.log("heavyCalculationMemoized ",heavyCalculationMemoized);
    console.log("heavyCalculationMemoized2 ",heavyCalculationMemoized2);


    return <div>
        <h1>Example of useMemo</h1>
        <button style={{backgroundColor:'blue'}} onClick={increment}>Toggle</button>
    </div>
}

export default UseMemo

/*
==> useMemo:
    ->  useMemo is a react hook which is used to memoisation of result so that the 
        computation is only re-rendered if any dependencies are changed.

    ->  useMemo helps optimize the performance of the functional components by preventing 
        unnecessary recalculation of values, especially in scenarios where the computation 
        is resource-intensive.

=> Performance Optimization :-
    ->  React-component re-rendered whenever a state or props changes in the component. 
        If a component is rendering a complex computation, such as a costly calculation or 
        a large data transformation, it might be in-efficient to re-compute that value on 
        every render, especially if the inputs haven't changed.

=> Avoiding Unnecessary Calculations:
    ->  useMemo allows you to memoize the result of a computation and only recalculate it 
        when the dependencies change. This can be particularly useful in scenarios where 
        the computation involves heavy computations, API calls, or other time-consuming 
        tasks.
    
    ->  useMemo is used for value memoisation while useCallback is used for function 
        optimization to enhance performance of the component while reducing re-calculation 
        and re-creation of value and function again and again.
    
        const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

*/