/*
=>  What is Render Props pattern?
    - A pattern where a component receives a function as a prop.
    - That function controls what the component should render.
    - Helps reuse rendering logic and keeps components flexible.

=>  When to use:
    - When multiple components need the same rendering logic.
    - When you want highly customizable components.
    - When you want to separate UI (presentation) from logic.

=>  When not to use:
    - When the rendering logic is only for one component.
    - When it makes the code harder to read or too complex.

=>  Advantages:
    - Reuses rendering logic in a flexible way.
    - Makes components more customizable.
    - Keeps business logic and UI logic separate.

=>  Disadvantages:
    - Adds an extra abstraction layer.
    - Can make data flow harder to understand.
    - Needs good understanding of React props and functions.
*/

import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    const { renderError, children } = this.props;
    const { hasError, error, errorInfo } = this.state;

    if (hasError) {
      return renderError(error, errorInfo);
    }

    return children;
  }
}

export default ErrorBoundary;
