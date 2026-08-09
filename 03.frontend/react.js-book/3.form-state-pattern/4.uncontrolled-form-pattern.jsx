/*
=> Uncontrolled Form Pattern (Using Refs):
    - React does not control the input, browser does
*/

function Form(){
    const inputRef = React.useRef();

    function submit(){
        console.log(inputRef.current.value)
    }

    return (
        <input 
            ref={inputRef}
        />
    );
}
/*
Used when:
    - No validation needed
    - Just need value on submit
    - Performance sensitive
*/