// if you have multiple reducers combined them
import { combineReducers } from "redux";
import CounterReducer from "./reducers";

const RootReducer = combineReducers({
    Counter:CounterReducer
    // You can add other reducers here
});

export default RootReducer;
