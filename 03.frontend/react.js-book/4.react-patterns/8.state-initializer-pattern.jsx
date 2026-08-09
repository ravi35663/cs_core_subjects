/*
=>  What is State Initializer Pattern?
    - A pattern where the initial state is defined using a function.
    - The function is passed to useState instead of a direct value.
    - Allows dynamic and computed initial state.

=>  When to use:
    - When initial state needs calculation or complex logic.
    - When state depends on props or other data.
    - To keep the component cleaner by moving init logic out.

=>  When not to use:
    - When initial state is simple and static.
    - When it adds unnecessary complexity.

=>  Advantages:
    - Clean and organized state setup.
    - Supports dynamic and flexible initialization.
    - Encourages modular and reusable logic.

=>  Disadvantages:
    - Adds abstraction that can confuse data flow.
    - Requires good understanding of React hooks.
*/

// Example - 1:
// 1. File is loaded by the browser/React bundler
//    → getInitialCounter is defined
//    → Counter component is defined

function getInitialCounter() {
  console.log("Computing initial state...");
  return 10;
}

export default function Counter() {

  // 2. Counter() runs for the FIRST render
  //    → React sees useState(() => getInitialCounter())
  //    → Because it's a FUNCTION initializer, React CALLS it ONCE
  //    → getInitialCounter() runs now
  //    → Console logs: "Computing initial state..."
  //    → count is set to 10

  const [count, setCount] = useState(() => getInitialCounter());

  // 3. JSX is returned and rendered to the DOM
  return (
    <div>
      <h2>Count: {count}</h2>

      {/* 4. User clicks button */}
      <button
        onClick={() => {
          // 5. setCount is called
          //    → React schedules a re-render
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );

  // 6. React re-renders Counter()
  //    → useState initializer function is NOT called again
  //    → count now contains the updated value
}

// Example:2
function getInitialCounter() {
  console.log("Computing initial state...");
  return 10;
}

export default function Counter() {

  // 1. Counter() is called for the FIRST render
  console.log("Render start");

  // 2. React initializes state
  //    → Calls getInitialCounter() ONCE
  //    → Logs: "Computing initial state..."
  const [count, setCount] = useState(() => getInitialCounter());

  // 3. React registers the first effect (runs AFTER DOM paint)
  useEffect(() => {
    console.log("useEffect runs");
  }, []);

  // 4. React registers the second effect
  //    → Runs AFTER every render where `count` changes
  useEffect(() => {
    console.log("State changed:", count);
  }, [count]);

  // 5. JSX is returned and committed to the DOM
  return (
    <div>
      <h2>Count: {count}</h2>

      {/* 6. User clicks button */}
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );

  /*
    ==== AFTER FIRST PAINT ====
    7. useEffect ([]) runs
       → Logs: "useEffect runs"

    8. useEffect ([count]) also runs
       → Logs: "State changed: 10"

    ==== USER CLICKS BUTTON ====
    9. setCount(11) → schedules re-render

    ==== RE-RENDER ====
    10. Counter() runs again
        → Logs: "Render start"
        → getInitialCounter() is NOT called again

    11. JSX updates

    ==== AFTER SECOND PAINT ====
    12. useEffect ([count]) runs
        → Logs: "State changed: 11"
  */
}
/*
Console Output Order (initial load):
    Computing initial state...
    Render start
    useEffect runs
    State changed: 10
*/
/*
After one click:
    Render start
    State changed: 11
*/


//Example 3:
import { useState } from "react";

// Custom hook to handle form state
const useFormStateFun = () => {
  // Initial state of the form
  const initialFormState = {
    username: "",
    password: "",
  };

  // State hook for the form
  const [formState, setFormState] = useState(initialFormState);

  // Function to handle changes in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return [formState, handleInputChange];
};

// export default useFormStateFun;


/*
=> Can we call api in state initializer function?
    -> No,
        Because:
            React expects useState initializers to be pure & synchronous
            API calls are side effects and async
    -> for api call you should use useEffect instead.
    
*/