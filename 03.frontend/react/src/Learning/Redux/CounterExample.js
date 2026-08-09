import { connect, useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "."
const Counter = ()=>{
    const count = useSelector(state=>{
        return state;
    });
    const dispatch = useDispatch();
    return <div>
        <h1>Count value:{count} </h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
}


export default Counter

/*
    Traditional Way
    import { connect } from "react-redux";
    import { increment,decrement } from "."
    const Counter = ({count,increment,decrement})=>{
        return <div>
            <h1>Count value:{count} </h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    }


    // This is used to update state values (redux store value) otherwise the store value won't change
    const mapStateToProps = (state) => ({count:state});
    // This is actions that is going perform some actions
    const mapDispatchToProps = { increment, decrement };
    export default connect(mapStateToProps,mapDispatchToProps)(Counter);
*/