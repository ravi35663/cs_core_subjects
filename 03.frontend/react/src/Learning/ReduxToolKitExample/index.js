//

import { Provider } from "react-redux"
import store from "./store"
import Counter from "./Counter"

const ReduxToolKitExample = ()=>{
    return <Provider store={store}>
        <Counter></Counter>
    </Provider>
};

export default ReduxToolKitExample;

/*
=> Redux-Tool-Kit
    ->  Redux Toolkit is an opinionated set of utilities and tools for simplifying and 
        improving the development experience with Redux. 
    ->  It includes several packages that work together to provide a streamlined approach to 
        writing Redux logic. 
    ->  The main packages included in Redux Toolkit are:    
    -> '@reduxjs/toolkit': The core package that includes utility functions and abstractions to 
        simplify common Redux use cases.
    ->  redux-thunk: A middleware for handling asynchronous logic in redux.
    ->  @reduxjs/immer: Integrates the Immer library to allow writing reducers with a simpler 
        syntax that resembles mutable code.
    ->  @reduxjs/reselect: Provides a selector library for creating memoized selectors.

=> Why do we use redux-tool-kit?
    -> Boilerplate Reduction: 
    Redux Toolkit significantly reduces the amount of boilerplate code needed for setting up 
    a Redux store, writing reducers, and creating actions.

--> Simplified Syntax: 
    It introduces a simplified and opinionated syntax for defining reducers, making it \
    easier to understand and write Redux logic.

--> Immutability with Immer: 
    The integration with Immer allows writing reducers with a mutable-style syntax, making 
    it more intuitive to update the state.

--> Async Logic with Thunks: 
    Redux Toolkit includes the createAsyncThunk utility to simplify handling asynchronous 
    logic using thunks.

--> DevTools Integration: 
    It comes with built-in integration for the Redux DevTools Extension, making it easier 
    to debug and inspect the state of your application.

==> Steps to setup redux-toolkit
    1) install dependencies
    2) Create redux store
    3) Write Reducers using createSlice:
    4) Combine Reducers:
    5) Connect Components:
    6) Provide the Store:
*/