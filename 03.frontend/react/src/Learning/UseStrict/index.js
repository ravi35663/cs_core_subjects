/*
    What is useStrict in react:
    -> useStrict in React is actually not a feature in React itself, but it is 
       related to JavaScript's "use strict" directive.
    -> In React, the equivalent concept is StrictMode. 
       StrictMode is a tool for highlighting potential problems in an application. 
       It activates additional checks and warnings for its descendants. 
       This mode checks for:
        1)  Unsafe lifecycle methods.
        2) Legacy string ref API usage.
        3) Deprecated findDOMNode usage.
        4) Unexpected side effects in component lifecycles.
*/
//Wrap your component tree with StrictMode to enable these checks.
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
