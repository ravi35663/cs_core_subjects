/*
=> useLayoutEffect:
    ->  useLayoutEffect is just like useEffect, but it runs synchronously after the DOM 
        updates and before the browser paints the screen.
    ->  
        useEffect → runs after the screen is painted.
        useLayoutEffect → runs before the screen is painted.
        
    ->  The main benefit of useLayoutEffect is that it lets you synchronously read and 
        modify the DOM before the browser paints the screen — so the user never sees an 
        inconsistent or flickering UI.
*/
/*
In simpler words:
    1) When you change something on the screen, React updates the DOM.
    2) useLayoutEffect runs right after that update but before the user sees it.
So you can:
    1) Measure the layout (size, position, etc.)
    2) Fix or reposition elements if needed
    3) All without the user ever seeing an in-between (wrong) state
*/
/*
    ->  “Painting the screen” means the browser visually displays the DOM and CSS updates.
    ->  useLayoutEffect gives you a chance to adjust things before that display happens.
*/
import { useState,useLayoutEffect,useEffect } from "react";
const UseLayoutEffectExample = ()=>{
    const [count,setCount] = useState(0);
    // ✅ useEffect (runs after paint)
    useEffect(()=>{
        console.log("Running useEffect",count);
        // setTimeout(()=>{
            setCount(100);
        // },2*1000)
    },[])
    // ⚡ useLayoutEffect (runs before paint)
    useLayoutEffect(async ()=>{
        console.log("Running useLayoutEffect",count);
        // setCount(100);
        await new Promise(resolve=>{
            setTimeout(()=>{
                setCount(2000);
                resolve();
            },10 * 1000)
        })
        console.log("Running useLayoutEffect line 45",count);
      return () => console.log("Cleanup before next layout effect or unmount");
    },[]);
    
    return (
        <div className="">
            <label>Count is: {count}</label>
        </div>
    )
}

/*
What Happens:
    ->  On first render, value = 0.
    ->  useLayoutEffect runs before the browser paints → it sets value to 100.
    ->  React re-renders immediately.
    ->  So, the user never sees 0, only 100.

If we used useEffect instead:
    ->  The browser paints 0 first.
    ->  Then useEffect runs and updates it to 100.
    ->  The user sees a flash or flicker from 0 → 100.
*/

/*
Note:
    1) useLayoutEffect can block painting, so use it sparingly.
    2) Prefer useEffect unless you need synchronous DOM measurement or correction.
*/

export default UseLayoutEffectExample