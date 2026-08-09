import { Provider } from "react-redux";
import store from "./setup";
import Child from "./Child";

const ReduxThunkExample = ()=>{
    return (<Provider store={store}>
        <Child />
    </Provider>);
}

export default ReduxThunkExample;