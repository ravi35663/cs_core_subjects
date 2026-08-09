
/*
=>  State Reducer Pattern:
    -   State Reducer Pattern is a way to manage component state using a reducer 
        function (similar to Redux).

    -   A reducer is a function that:
            - takes the current state + an action and returns the new state.

    -   All state update logic lives in ONE place.
    -   This makes the app easier to maintain, debug, and scale.
*/
/* 
=>  When to use:
    - When your app has complex state logic.
    - When you want predictable and traceable state updates.
    - When you want all state changes handled in one central place.
*/

/* 
=>  When not to use:
    - For small or simple apps where state is easy to manage.
    - When reducer logic adds unnecessary complexity.
*/
/* 
=>  Advantages:
    - Centralized state update logic.
    - Easier debugging and tracking of state changes.
    - More structured and scalable design.
*/
/* 
=>  Disadvantages: 
    - Extra setup and boilerplate.
    - Requires understanding of reducers / Redux-style patterns.
*/
// Example: 1
import React, { useReducer } from "react";

/*
  Reducer function
  - Takes current state + action
  - Returns new state
*/
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
}

// Component
export default function Counter() {
  // useReducer replaces useState for complex state
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
}


// Example - 2:


import React, { useReducer } from "react";

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

// Example component using the reducer
const TodoList = () => {
  const [state, dispatch] = useReducer(reducer, { todos: [] });

  return (
    <div>
      <h2>Todo List</h2>

      <button
        onClick={() =>
          dispatch({ type: "ADD_TODO", payload: "Learn React" })
        }
      >
        Add Todo
      </button>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
            >
              {todo.text}
            </span>

            <button
              onClick={() =>
                dispatch({ type: "REMOVE_TODO", payload: todo.id })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
