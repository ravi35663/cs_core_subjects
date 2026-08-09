import { useReducer } from "react"

const initialState = {count:0}
/*
    Below state is parameter of argument initialState(as added in useReducer) and 
    {type} is action 
*/
const reducer = (state,{type})=>{
    switch(type){
        case 'increment':{
            return {...state,count:state.count+1}
        }
        case 'decrement':{
            return {...state,count:state.count-1}
        }
        default:{
            return {...state}
        }
    }

}
const UseReducer = ()=>{
    const [state,dispatch] = useReducer(reducer,initialState);

    const increment = ()=>{
        dispatch({type:"increment"})
    }

    const decrement = ()=>{
        dispatch({type:"decrement"})
    }


    return <div>
        <h1>Example of reducer</h1>
        <h2>Count Value: {state.count}</h2>
        <div style={{display:"flex justify-content-between"}}>
            <button style={{backgroundColor:"green","borderRadius":"4px",margin:"2px",padding:"4px"}} onClick={increment}>increment</button>
            <br/><button style={{backgroundColor:"red","borderRadius":"4px",margin:"2px",padding:"4px"}} onClick={decrement}>Decrement</button>
        </div>
    </div>
}

export default UseReducer;


/*
===> 6) useReducer :-
    ->  useReducer: A React Hook for complex state logic, used as an alternative to useState.
    ->  Useful when state has multiple sub-values or depends on the previous state.
    ->  Provides more organized and maintainable state management.
    ->  Enables predictable state transitions through defined actions.
    ->  Centralizes state logic in one reducer function for easier management and 
        understanding.

   ** Basic syntax of useReducer:
   const [state, dispatch] = useReducer(reducer, initialState);
   * state:     represents the current state.
   * dispatch:  is a function used to dispatch actions to update the state.(just like setState)
   * reducer:   is a function that takes the current state and an action and returns 
   *            the new state.
   * initialState: is the initial state of the component.
*/