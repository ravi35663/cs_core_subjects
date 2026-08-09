/*
=>  Extensible Styles Pattern:
    -   A pattern to create flexible and customizable styles in React components.
    -   Styles are not hardcoded inside the component.
    -   Uses dynamic CSS classes or style props.
    -   Allows users to extend or override styles easily.
    -   Makes components more reusable and theme-friendly.

=>  When to use it:
    -   When components must support different themes or styles.
    -   When users should be able to customize the UI appearance easily.
    -   When you want consistent design with the flexibility to change styles.

=>  When not to use:
    -   When styles are fixed and do not need customization.
    -   When the app requires strict control over the UI appearance.

=>  Advantages:
    -   You can customize or extend component styles without touching the original 
        component code.
    -   The application keeps a consistent look and feel, while still allowing style 
        flexibility.
    -   Styling is kept separate from component logic, which makes maintenance easier.

=>  Disadvantages:
    -   May result in increased complexity if extensible styles are not managed 
        properly.
    -   Requires careful design to ensure that styles can be extended in a consistent 
        and predictable manner.
*/
import React from 'react';
import './Button.css';

const Button = ({ color = 'blue', size = 'medium', onClick, children }) => {
  const buttonClasses = `Button ${color} ${size}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
