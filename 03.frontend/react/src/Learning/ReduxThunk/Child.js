import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux"
import { fetchData } from "./actions";
const Child = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        fetchData(dispatch);
    },[]);

    const state = useSelector(state=> state);
    console.log("State is <><><>",state);
    return (
        <div>
            <h>Data: 1</h>
            {state.data.products.map(item=>{
                return <h3 key={item.id}>{item.title}</h3>
            })}
        </div>
    )
}
export default Child