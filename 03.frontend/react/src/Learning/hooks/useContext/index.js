import React,{ useState } from "react"
import  TaskContext  from "./MyContext"
import Task from "./Task"
const dummyTasks = [{name:"task 1",rating:1},{name:"task 2",rating:2},{name:"task 3",rating:3},{name:"task 4",rating:4}]
const Tasks = ()=>{
    const [isActive, setIsActive] = useState(true);
    const [tasks, setTasks] = useState(dummyTasks);
    return <TaskContext.Provider value={{isActive,setIsActive,tasks,setTasks}}>
        {/* Task context is accessible to all its children components */}
        <Task ><h1>Hello World</h1></Task>
    </TaskContext.Provider>
}

export default Tasks;

/*
    // 1. Create a context
    import React, { createContext, useContext } from 'react';

    const MyContext = createContext();

    // 2. Create a provider (can be a higher-level component or part of your app structure)
    const MyProvider = ({ children }) => {
    const sharedValue = 'This is the shared value';
    return <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>;
    };

    // 3. Use the context in a component
    const MyComponent = () => {
    const contextValue = useContext(MyContext);

    return <div>{contextValue}</div>;
    };

    // 4. Wrap your app (or a part of it) with the provider
    const App = () => {
    return (
        <MyProvider>
        <MyComponent />
        </MyProvider>
    );
    };
*/

/*
==> 3)UseContext:
    ->  useContext is a hook in react which is used to share values/data across its 
        children components.
    ->  Context is way to share values, such as themes, authentication status between 
        component without explicitly passing data through each level of the component tree.

    ->  We use context to avoid props drilling:
    ->  we use context to write cleaner code.
    ->  See example where it is implemented.

==> Context (React context):
    ->  This is a place where you can store data globally/module_wise so that you can 
        access it in any component without props drilling.
    ->  In react we can create as many context we want.
    ->  In class based components we cannot use context because we don't have hooks in 
        class based component.
    ->  but we can also use that context using 
        <ContextName.Consumer> (data)=> console.log("Data ",data)</ContextName.Consumer>
        you can get all context data into you class based component.

    ->  If you want to change context data, you have wrap all you components inside Provider.
            <ContextName.Provider value={{}}> </ContextName.Provider>
    ->  Context is data management API.
    ->  Redux is external and it is state management library
    ->  For small application don't use redux
    ->  You can create any large application using context.
*/