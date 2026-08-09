import { Provider } from "react-redux"
import {store} from './index';
import Counter from "./CounterExample";
const ReduxExample = ()=>{
    return <Provider store={store}>
        <Counter />
    </Provider>
}

export default ReduxExample;