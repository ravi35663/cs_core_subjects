import { useSelector,useDispatch } from "react-redux";
import { decrement, increment } from "./Reducers/reducers";
const Counter = ()=>{
    const count = useSelector(state=>{
        return state.value
    });
    const dispatch = useDispatch()
    return <div>
        <h1>Redux tool-kit implementation.</h1>
        <h2>Count: {count}</h2>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
}
export default Counter;