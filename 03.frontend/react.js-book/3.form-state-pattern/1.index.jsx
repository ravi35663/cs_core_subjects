/*
=>  What are Forms / State Patterns in React:
    -   It is standard design pattern:
    -   To  manage form data, updating it, validating it and submitting it using react 
        state.
=>  Because forms change frequently and interact with users, we follow patterns to 
    make them:
        - Predictable
        - Maintainable
        - Easy to validate
        - Easy to scale
*/

/*
=>  Enterprise React Form Architecture:
    -   Below is a real enterprise-grade form architecture used in large React 
        applications (banking, SaaS dashboards, admin portals, etc.).

    -   This is the same mental model used by Formik, React Hook Form, AntD Forms, 
        MUI Forms under the hood.

=>  Goal:
    1) Scalable
    2) Predictable
    3) Validated
    4) Testable
    5) Easy to extend
*/
/*
We break the form into 4 layers:
    UI Inputs
        ↓
    Form State Manager (Reducer)
        ↓
    Validation Layer
        ↓
    Submission / Side Effects
*/

// Example:
// 1.Central Form State Store (Reducer Pattern):
const initialState = {
    value:{
        email:"",
        password:""
    },
    errors:{},
    touched:{},
    isSubmitting: false
}

function formReducer(state,action){
    switch(action.type){
        case "CHANGE":{
            return {
                ...state,
                values:{
                    ...state.values,[action.name]:action.value
                }
            };
        }
        case "BLUR":{
            return {
                ...state,
                touched:{
                    ...state.touched,
                    [action.name]:true
                }
            }
        }
        case "SET_ERRORS":{
            return {...state,errors:action.errors}
        }
        case "SUBMIT_START":{
            return {...state,isSubmitting:true}
        }
        case "SUBMIT_END":{
            return {...state,isSubmitting:false}
        }
        default:{
            return state;
        }
    }
}
//2.Validation Layer (Pure Function):
function validate(values){
    const errors = {};
    // Validate email
    if(!values.email) errors.email = "Email required";
    if(!values.email.includes('@')) errors.email = "Invalid email";

    // Validate password:
    if(!values.password) errors.password = "Password Required";
    if(!values.password.length < 6) errors.password = "Min 6 character";

    return errors;
}

//3.Custom Enterprise Hook:
function useEnterpriseForm(onSubmit){
    const [state, dispatch] = React.useReducer(formReducer,initialState);

    const handleChange = (e)=>{
        dispatch({
            type:"CHANGE",
            name:e.target.name,
            value:e.target
        })
    }
    const handleBlur = (e)=>{
        dispatch({
            type:"BLUR",
            name:e.target.name
        })
    }
    const handleSubmit = async()=>{
        e.preventDefault();
        // Validate the input before the submit of the form:
        const errors = validate(state.values);
        if(Object.keys(errors).length){
            dispatch({type:"SET_ERROR",errors});
            return;
        }
        dispatch({type:"SUBMIT_START"});
        await onSubmit(state.values);
        dispatch({type:"SUBMIT_END"});
    }

    return  { ...state,handleChange,handleBlur,handleSubmit};

}

// 4️. UI Layer (Dumb Inputs)
const LoginForm = ()=>{
    const formHook = useEnterpriseForm(async (data)=>{
        console.log("Submitting the form data",data);
    })

    return (
        <form onSubmit={formHook.handleSubmit}>
            <input 
                name="email"
                value={formHook.values.email}
                onChange={formHook.handleChange}
                onBlur={formHook.handleBlur}
            />
            {formHook.touched.email && form.errors.email&& (
                <p>{formHook.errors.email}</p>
            )}
            <input 
                name="password"
                type="password"
                value={formHook.values.password}
                onChange={formHook.handleChange}
                onBlur={formHook.handleBlur}
            />
            {formHook.touched.password && formHook.errors.password && (
                <p>{formHook.errors.password}</p>
            )}
            <button disabled={formHook.isSubmitting}>
                {formHook.isSubmitting ? "Submitting..." :"Login"}
            </button>

        </form>
    )
}

// How Big Tech Actually Builds Forms:
/*
| Company Type          | What They Use                                 | Internals                                      |
| --------------------- | --------------------------------------------- | ---------------------------------------------- |
| **Google**            | Internal form engines + React Hook Form style | Reducers, context isolation, schema validation |
| **Meta (Facebook)**   | Custom form infra (Relay + form state stores) | Controlled → uncontrolled hybrid               |
| **Amazon**            | Redux-like reducers + validation layers       | Heavy schema driven forms                      |
| **Netflix**           | React Hook Form + custom resolvers            | Async validation, API error mapping            |
| **Apple (Web teams)** | Formik-like architecture                      | Immutable state + accessibility rules          |
*/
/*
=>  What Changes at FAANG Scale:
    -   They don’t use simple useState forms.
    -   They add:
*/
/*
// 1. State Normalization:
    fields: {
        email: { value, error, touched },
        password: { value, error, touched }
    }
*/

/*
=>  2. Schema Driven Forms
const schema = {
  email: { required: true, regex: /@/ },
  password: { minLength: 6 }
};
UI is auto-generated from schema.
*/

/*
3. Hybrid Controlled / Uncontrolled
    Inputs register once
    Values read from refs
    Validation triggers reducer updates (Exactly how React Hook Form works)
*/

/*
4. Async Validation:
    await checkEmailAvailability(email);
*/

/*
5. Server Error Mapping:
    apiErrors = { email: "Already exists" }
    dispatch({ type: "SET_ERRORS", errors: apiErrors });
*/

/*
6. Context Isolation: They split context:
    <FormStateProvider>
    <FieldProvider name="email" />

    So only the field re-renders.
*/