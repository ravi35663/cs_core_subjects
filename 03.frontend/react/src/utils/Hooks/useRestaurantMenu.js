// This is how we create our own custom hooks in react.
// Hooks are nothing but some special javascript utilities functions which will return some values.
// custom hooks can be helpful for testing large scale code in smaller chunks and it can help to maintain the code easily.
import { useEffect,useState } from "react";
import useOnlineStatus from "./useOnlineStatus";

const useRestaurantMenu = (resId)=>{
    const [album,setAlbum] = useState(null);
    useEffect(()=>{
        fetchAlbum();
    },[]);

    const fetchAlbum = async ()=>{
        const data = await (await fetch(`https://jsonplaceholder.typicode.com/albums/${resId}`)).json()
        setAlbum(data);
    }
    // fetch data;
    return album;;
};


export default useRestaurantMenu;