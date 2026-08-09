const { useState } = require("react");

/*
=> React fully control the input:
*/
function LoginForm(){
    const [email,setEmail] = useState("")
    return (
        <input 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder={"Email"}
        />
    )
}

/*
=>  How it works
    - Input value comes from React state
    - Every change updates state
    - UI is always in sync with state

=>  Use when:
    - You need validation
    - You need live UI updates
    - You need form submission logic
*/
