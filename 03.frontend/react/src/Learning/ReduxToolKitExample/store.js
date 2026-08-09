import { configureStore } from "@reduxjs/toolkit"
import RootReducer from './Reducers/reducers';
const store = configureStore({reducer:RootReducer});

export default store
