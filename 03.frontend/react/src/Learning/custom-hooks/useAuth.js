import { useEffect, useState } from "react"

const useAuth = ()=>{
    const [user,setUser] = useState(false);
    useEffect(()=>{
        setUser(true);
    },[]);
    return user;
}

export default useAuth;