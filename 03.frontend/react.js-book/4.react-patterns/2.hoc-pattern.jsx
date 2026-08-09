/*
=>  HOC Pattern:
    -   A Higher Order Component (HOC) is a pattern to reuse logic between components.
    -   It is a function that takes a component and returns a new enhanced component.
    -   The returned component has extra behavior or data without changing the 
        original one.
    -   Helps in sharing common logic across multiple components.

=>  When to use it:
    -   When you need to share logic across many components without repeating code.
    -   When you want to add common behavior or features to multiple components.
    -   When you want to separate UI (presentation) from business logic for cleaner 
        code.
=>  When not to use it:
    -   When the logic is specific to a single component and will not be reused.
    -   When the logic is too complex and may make HOCs difficult to understand.

=>  Advantages:
    -   Encourages code reuse by sharing common logic across components.
    -   Separates UI logic from business logic, making components cleaner.
    -   Improves modularity and composition using functional design patterns.

=>  Disadvantages:
    -   Adds extra abstraction, which can make data flow harder to follow.
    -   Too many HOCs can create complex, hard-to-debug components.
    -   Can hide the component hierarchy, making the app structure harder to 
        understand.
*/

import React, { useState } from "react";

// HOC that handles form state and logic:

function withForm(WrappedComponent){
    const WithForm =(props)=>{
        const [formValues,setFormValues] = useState({});

        const handleInputChange = (event)=>{
            const {name,value} = event.target;
            setFormValues((prevValues)=>{
                return {...prevValues,[name]:value};
            })
        }

        const handleSubmit = (event)=>{
            event.preventDefault();
            if(props.onSubmit){
                props.onSubmit(formValues);
            }
        }

        return (
            <WrappedComponent
                {...props}
                formValues={formValues}
                onInputChange={handleInputChange}
                onSubmit={handleSubmit}
            />
        )
    }
    return WithForm;
}

export default withForm;

// Example Usage: Created the simple form
function MyForm({ formValues, onInputChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="email"
        value={formValues.email || ""}
        onChange={onInputChange}
        placeholder="Email"
      />
      <input
        name="password"
        value={formValues.password || ""}
        onChange={onInputChange}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

// Create a HOD with withForm and passed the MyForm component as parameter:
const MyFormWithLogic = withForm(MyForm);
