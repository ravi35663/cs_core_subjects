/*
=> Custom Hook Pattern:
    -   The Custom Hook pattern is used to encapsulate component logic in a reusable 
        function.
    -   Custom Hooks are normal JavaScript functions that use React Hooks.
    -   They can use hooks like useState, useEffect, useContext, etc.
    -   They allow sharing logic between multiple components.
    -   They help in reusing and organizing business logic cleanly.

=> When to use it
    -   Use Custom Hooks when you want to reuse the same logic in multiple components.
    -   They help you separate complex logic from the UI, making components easier to 
        read.
    -   They make your code clean, organized, and easier to maintain.
    -   They allow you to split logic into small modules, which makes unit testing 
        easier.

=> When not to use it:
    -   Do not use a Custom Hook when the logic is only needed in one component.
    -   Avoid it when the logic is very simple and doesn’t need extra abstraction.

=> Advantages:
    -   Helps reuse logic by moving common code into a single hook.
    -   Makes code cleaner and easier to read by separating logic from UI.
    -   Makes testing easier because logic can be tested independently.

=> Disadvantages:
    -   Can add unnecessary complexity if too many Custom Hooks are created.
    -   Requires a good understanding of React Hooks to use them correctly.
*/
// Example:
import { useState, useEffect } from "react";
import axios from "axios";
function useFetch(url){
    const [data,setData] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get(url);
                setData(response.data);
            }catch(err){
                setError(err);
            }finally{
                setLoading(false);
            }
        }
        fetchData();
        return ()=>{
            // This is optional block
            console.log("if you want you can add clean up logic here:");
        }
    },[url])
    return {data,loading,error};
}

// Example usage:
export default function ExampleComponent(){
    // get the item from the custom hook;
    const {data,loading,error} = useFetch("https://example.com/api/data");
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>
    return (
        <div>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    )
}
