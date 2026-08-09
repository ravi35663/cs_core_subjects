import useAuth from "./useAuth";
import useCounter from "./useCounter"
const CustomHook = ()=>{
    const {count,increment,decrement} = useCounter();
    const isActiveUser =useAuth();
    console.log("is active user: <><><>", isActiveUser);
    return <div>
        <h5>Custom Hook Example</h5>
        <h2>Active User :{isActiveUser? "Yes": "No"}</h2>
        <h2>Count: {count}</h2>
        <button onClick={increment}> Increment</button><br/>
        <button onClick={decrement}> Decrement</button>
    </div>
};

export default CustomHook;

/*
==> Custom hooks in react:-
    ->  Custom hooks are functions created using React hooks.
    ->  They start with "use" (e.g., useCounter).
    ->  A custom hook is a function that can call other hooks.
    ->  It helps extract and reuse logic, making code modular and maintainable.
    ->  Custom hooks let you share stateful logic without using render props or HOCs.

==> Why do we use custom hooks:
    1)  Reuse Logic: Custom hooks let you reuse stateful logic across components, reducing 
        code duplication.

    2)  Separation of Concerns: They separate logic from UI, keeping components focused 
        on rendering.

    3)  Abstraction: Custom hooks abstract complex logic into simple interfaces, improving 
        readability and maintainability.
        
    4)  Testing: Encapsulated logic can be unit-tested independently, making the codebase 
        more testable.
*/