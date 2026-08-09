import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/*
  createAsyncThunk is used for async operations (like API calls).
  It automatically creates action types:
  - pending
  - fulfilled
  - rejected
*/
export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    // Call API to fetch todos
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
    
    // Convert response to JSON
    const data = await response.json();
    
    // This data will be available in action.payload
    return data;
  }
);

// createSlice is used to create reducer + actions together
const taskSlice = createSlice({
  name: "tasks",

  // initialState is the default state of this slice
  // Here, tasks are stored as an array
  initialState: [],

  reducers: {
    /*
      addTask:
      - Adds a new task to the state
      - Redux Toolkit uses Immer, so we can "mutate" state safely
    */
    addTask: (state, action) => {
      state.push(action.payload);
    },

    /*
      deleteTask:
      - Removes a task based on task id
      - action.payload contains the id to delete
      - We return a new filtered array
    */
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },

    /*
      updateTask:
      - Updates an existing task
      - action.payload contains:
        {
          id: task id to update,
          updateTask: updated task object
        }
    */
    updateTask: (state, action) => {
      const { id, updateTask } = action.payload;

      // Find index of task with matching id
      const taskIndex = state.findIndex(task => task.id === id);

      // If task exists, replace it with updated task
      if (taskIndex !== -1) {
        state[taskIndex] = updateTask;
      }
    },

    /*
      clearAllTasks:
      - Removes all tasks from the state
      - Setting length to 0 clears the array
    */
    clearAllTasks: (state) => {
      state.length = 0;
    }
  },

  /*
    extraReducers is used to handle actions
    that are not defined inside reducers
    (like async thunks)
  */
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      /*
        When fetchTasks API call is successful:
        - action.payload contains fetched tasks
        - Replace current state with API data
      */
      return action.payload;
    });
  }
});

// Export actions to use in components
export const {
  addTask,
  deleteTask,
  updateTask,
  clearAllTasks
} = taskSlice.actions;

// Export reducer to add it to the store
export default taskSlice.reducer;
