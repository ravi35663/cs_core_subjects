import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/taskSlice";

/*
  configureStore is a helper from Redux Toolkit
  that creates the Redux store with good defaults:
  - Redux DevTools enabled
  - Thunk middleware included
  - Better error handling
*/
const store = configureStore({
  /*
    reducer:
    - This is the root reducer of the app
    - Each key becomes a slice of the global state
    - Here, "tasks" will be available as:
      state.tasks
  */
  reducer: {
    tasks: taskReducer,
  },
});

// Export store so it can be used in <Provider>
export default store;
