/*
=>  Grouped Object State Pattern:
    -   Instead of many useStates, store form values in one object.
*/
function RegisterForm(){
    const [form,setForm] = React.useState({
        name:"",
        email:"",
        password:""
    });

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    return (
        <>
            <input name="name" value={form.name} onChange={handleChange}/>
            <input name="email" value={form.name} onChange={handleChange}/>
            <input name="password" value={form.name} onChange={handleChange}/>
        </>
    )
}
/*
=>  Why use this?
    - Scales better for big forms
    - One state source
    - Easier reset & validation
*/