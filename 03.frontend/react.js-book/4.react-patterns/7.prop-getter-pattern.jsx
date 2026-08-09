/*
=>  What is Props Getters?
    -   A pattern where the parent passes special functions (props getters) to 
        the child.
    -   These functions let the child read or update specific parent props in a 
        safe way.
    -   Helps control how the child interacts with parent data.

=>  When to use:
    - When a child needs to read or update specific parent props.
    - When you want controlled and predictable communication.
    - When some parent behavior must be customizable from the child.

=>  When not to use:
    - When the child does not need parent data.
    - When it adds unnecessary complexity or confusion.

=>  Advantages:
    - Controlled access to parent props.
    - Clear and predictable data flow.
    - Flexible child behavior based on parent state.

=>  Disadvantages:
    - Can tightly couple parent and child.
    - Increases complexity.
    - Needs careful design to avoid side effects.
*/


import React from "react";

// TableHeader component
const TableHeader = ({ column, onSort }) => {
  const handleSort = () => {
    if (column.sortable) {
      onSort(column.id);
    }
  };

  return (
    <th
      onClick={handleSort}
      style={{ cursor: column.sortable ? "pointer" : "default" }}
    >
      {column.label}
    </th>
  );
};

export default TableHeader;
