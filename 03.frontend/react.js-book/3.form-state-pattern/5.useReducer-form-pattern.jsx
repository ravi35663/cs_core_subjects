/*
=> useReducer Form Pattern (Enterprise Forms):
 - Used when:
    - Many fields
    - Complex validation
    - Dynamic inputs
*/

function reducer(state,action){
    return {...state,[action.name]:action.value}
}

function Form(){
    const [state,dispatch] = React.useReducer(reducer,{});
    return (
        <>
            <input 
                name="email"
                value={state.value}
                onChange={(e)=> dispatch({name:e.target.name,value:e.target.value})}
            />
        </>
    )
}
/*
=>  Why:
    - Predictable state updates
    - Central logic
    - Easy debugging
*/