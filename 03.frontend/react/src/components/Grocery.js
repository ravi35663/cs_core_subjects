import { useEffect } from "react";

const Grocery = ()=>{

    // const headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OGFjYjhmZDJhMzMwYzY2MzNlOGEyNyIsImVtYWlsIjoicmF2aS5rdW1hcjVAa2l3aXRlY2guY29tIiwiaXNfdmVyaWZpZWQiOnRydWUsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA0ODAyMjkyLCJleHAiOjE3MDQ5NzUwOTJ9.HcVJdg8F-pkiInTwrZqsSOXwm7xINc0QJ7yod4RsRcM');

    // const options = {
    // method: 'GET', // or 'POST', 'PUT', etc.
    // headers: headers,
    // Additional options like body, credentials, mode, etc., can be included here
    // };

    const abortController = new AbortController();
    const signal = abortController.signal;

    useEffect(()=>{
        apiCall();
    })

    apiCall = async ()=>{
         const data = await (await fetch('http://127.0.0.1:3000/api/task',{signal})).json();
         console.log("Signal is aborted");
         console.log("Data is ",data);
    }

    const handleClick = ()=>{
        console.log("before abort abortController ",abortController);
        abortController.abort();
        console.log("after abort abortController  ",abortController);
    }

    return<div>
            <h1>Grocery online store,and we have lot of  child components. </h1>
            <button onClick={handleClick} style={{border:'3px', borderBlockColor:"blue"}}>Cancel API Call</button>
    </div>
}

export default Grocery;