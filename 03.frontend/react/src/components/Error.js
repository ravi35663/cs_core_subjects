// This hooks used to provide more details about reason of error. 
import { useRouteError } from "react-router-dom";
const Error = ()=>{
    // {
    //     "status": 404,
    //     "statusText": "Not Found",
    //     "internal": true,
    //     "data": "Error: No route matches URL \"/contactll\"",
    //     "error": {}
    // }
    
    const err = useRouteError();
    console.log("Error ",err);
    return (
        <div>
            <h1>Status: {err.status}</h1>
            <p>{err.statusText}</p>
            <p>Message: {err.data}</p>
        </div>
    )
}

export default Error;