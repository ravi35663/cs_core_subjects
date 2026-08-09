/*
==> Controlled Components:
    ->  A controlled component in react is form data controlled by react state.
    ->  Every time state of the components is change then form element renders.
*/

const ControlledComponent = ()=>{
    const [text,setText] = useState('')

    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleClick = (e)=>{
        // It is used to avoid default behavior of form (i.e. page reload);
        e.preventDefault();
    }

    return (
    <form>
        <input type="text" onChange={handleChange} value={text}/>
        <button type="submit" onClick={handleClick}>Submit</button> 
    </form>)
}

/*
    UnControlled Components:
    -> Uncontrolled components store their state internally. Form data directly 
       communicate to the DOM element and components does not render on form data change.
*/ 

const UncontrolledControlled = ()=>{
    const inputRef = useRef(null)
    const handleSubmit = ()=>{
        e.preventDefault();
        console.log("Input value is : ",inputRef.current.value);
    }

    return (
    <form>
        <input type="text" ref={inputRef}/>
        <button type="submit" onClick={handleSubmit}></button>
    </form>)
}