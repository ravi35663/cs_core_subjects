/*
=>  What is Control Props Pattern?
    - A pattern where the parent controls the child’s state using props.
    - The child does not manage its own state.
    - The parent passes values and handlers to control the component.

=>  When to use:
    - When a parent must control a component’s state.
    - When the component should behave differently in different places.
    - When two-way (parent ↔ child) communication is needed.

=>  When not to use:
    - When the state is only needed inside the component.
    - When too many props make the component complex.

=>  Advantages:
    - Gives full control of state to higher-level components.
    - Supports two-way communication.
    - Makes components reusable in many contexts.

=>  Disadvantages:
    - Can tightly couple parent and child.
    - Data flow can become hard to track.
    - Needs careful prop management to avoid bugs.
*/
import React from "react";

const Toggle = ({ value, onChange }) => {
  const handleClick = () => {
    onChange(!value);
  };

  return (
    <button onClick={handleClick}>
      {value ? "On" : "Off"}
    </button>
  );
};

export default Toggle;
