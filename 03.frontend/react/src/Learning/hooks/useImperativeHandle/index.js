/*
=>  What is useImperativeHandle:
    ->  useImperativeHandle is a React Hook that lets you customize the value exposed to a 
        parent component when using ref.
    ->  Normally, when a parent passes a ref to a child component, it directly gets access 
        to the child DOM node. But sometimes you don’t want to expose everything — only 
        specific functions or properties.
    ->  That’s where useImperativeHandle helps.
*/

import React, { forwardRef, useImperativeHandle, useRef } from "react"
import ModalExample from "./example";

//Simple Example (Without useImperativeHandle)
const Child = ()=>{
    return (
        <input type="text" name="title" />
    )
}

// Step 1: Use forwardRef to pass ref
// To make a child component accept a ref, wrap it with React.forwardRef:
const Child1 = React.forwardRef((props,inputRef)=>{
    console.log("Child is called:",inputRef,props)
    return (
    <input ref={inputRef} type="text"/>
     )
});

/*
//Add useImperativeHandle:
    Now, instead of giving access to the raw <input>,
    we’ll expose only specific methods — for example, focus and clear.
*/
const Child2 = forwardRef((props,ref)=>{
    const inputRef = useRef(null);
    console.log("Hello World");
    useImperativeHandle(ref,()=>{
        return {
            focus:()=> inputRef.current.focus(),
            clear:()=> (inputRef.current.value = '')
        }
    });
    return (<input ref={inputRef}/>)
});

const Parent = ()=>{
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const handleInputBox = ()=>{
        console.log("Input focus: ")
        // inputRef.current.focus();
        console.log("Input current: ",inputRef.current)
        inputRef.current &&  inputRef.current.focus();
    }

    return (
        <>
            <div>
                <div>Example without imperative handler</div>
                {/* <Child inputRef ={inputRef}/> ❌ Won’t work - ref not forwarded */}
                <Child1 ref={inputRef}/>   {/*It should always be ref not inputRef*/}
                <button onClick={handleInputBox} > Focus Input </button>
            </div>
            <div>
                <div>
                    <label>Example with useImperativeHandler</label>
                    {/* Example using imperative function */}
                    <Child2 ref={inputRef2}/>
                    {/* Here we are calling child function without from parent component */}
                    <button onClick={()=>inputRef2.current.focus()}>Focus</button>
                    <button onClick={()=>inputRef2.current.clear()}>Clear</button>
                </div>
            </div>
            <br />
            <div>
                <span>Real world Example with useImperativeHandle:</span>
                <ModalExample />
            </div>
        </>
    )
}

export default Parent;