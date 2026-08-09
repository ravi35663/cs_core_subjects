import { createStore } from "redux";

/*
    Action:
        An object that represents an intention to change the state. Actions must have 
        a type property and can have additional data.
*/
// actions
export const increment = ()=>{
    return {type:"increment"};
}
export const decrement = ()=>{
    return {type:"decrement"};
}

/*
    Reducer:
        A function that determines changes to an application's state. It takes the 
        current state and an action as arguments and returns a new state.
*/
// Reducer
export const CountReducer = (state=0,{type})=>{
    switch(type){
        case "increment":{
            console.log("Increment <>",state);
            return state+1
        }
        case "decrement":{
            console.log("Decrement <>",state);
            return state-1
            
        }
        default:{
            return state;
        }
    }
}

/*
    Store:
        A central place that holds the application's state. The store is created using the reducer and allows state to be read and updated.
*/
/*
    Reducer: Handles how the state changes based on actions.
    Action:  Describes what changes should be made to the state.
    Store:   Manages the state and allows interaction with it.
*/

// You can add multiple reducers
// Create store
export const store = createStore(CountReducer);

/*
->  Redux is a state management library for JavaScript applications, primarily used with 
    react for building user interfaces. 

->  Redux provides a predictable state container, which helps manage the state of an 
    application in a more organized and scalable way. 
    
->  Redux follows a unidirectional data flow and introduces concepts such as actions, 
    reducers, and a single immutable state tree.

==> Why do we use redux :
    ->  Centralized State Management: 
        Redux provides a centralized store where the entire state of an application is stored. 
        This makes it easier to manage and debug complex state interactions.

    ->  Predictable State Changes: 
        Redux follows a strict unidirectional data flow, making it easier to understand how the 
        state changes over time. Changes to the state are made through pure functions called 
        reducers.

    --> Debugging and Time Travel: 
        Redux has excellent debugging tools, and it supports time-travel debugging, allowing 
        developers to move back and forth between different states in the application.

    --> Consistent Application Structure: 
        Redux encourages a structured approach to organizing code, making it easier to maintain 
        and scale applications.

    --> Middleware Support: 
        Redux has middleware support, enabling developers to extend the functionality of Redux 
        with custom middleware for tasks like logging, asynchronous actions, and more.
*/