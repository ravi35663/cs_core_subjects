/*
=>  Validation State Pattern
*/
import { useState } from "react";
function Form(){
    const [form,setForm] = useState({email:""});
    const [error,setError] = useState('')
    const submit = ()=>{
        if(!form.email.includes('@')){
            setError("Invalid email");
        }
    }
}
