import { createContext } from "react";

// here you can add default value in context;
const TaskContext = createContext({});

export default TaskContext;

/*
Create context:
    const initialState = {}
    const TaskContext = CreateContext(initialState)
    export TaskContext
*/