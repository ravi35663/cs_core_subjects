import React, { useRef, useImperativeHandle, forwardRef, useState } from "react";
/*
    useImperativeHandle is used when the parent wants to control certain actions or 
    behaviors of a child component directly.

    Example analogy:
    Component	              Role	              Example
    Parent	                Remote control	    Can call play(), pause(), etc.
    Child	                  TV	                Defines what those buttons do internally
*/
/*
    The parent gives a ref to the child.
    ->  Using useImperativeHandle, the child decides what the parent is allowed to control — 
        like a remote control
    ->  Benefit : Clean encapsulation + controlled inter-component communication.
*/

/*
==> In React terms:
    1) Parent creates a ref
    2) Passes it to the child (<Child ref={ref} />)
    3) Child uses useImperativeHandle(ref, () => ({ methods }))
    4) Parent can then call those methods → ref.current.methodName()
Note:
    1)  useImperativeHandle gives the parent limited control over the child, without exposing 
        the child’s internal details or DOM directly.
*/

/*
=> Keys benefits:
    1) Encapsulation (Data Hiding): 
        ->  The child component can hide its internal logic, DOM, and state.
        ->  It only exposes the methods that the parent should be able to use.
    2) Controlled Access (Parent → Child Communication): 
        Normally, communication in React flows from parent to child via props.
        But sometimes, you need imperative(mandatory) control, e.g.:
            1) Focus an input
            2) Reset a form
            3) Open/close a modal
            4) Start/stop an animation
    3) Avoid Direct DOM Manipulation in Parent
        and many more.
*/
const Modal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("Hello World line 46: ")
  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }));

  if (!isOpen) return null;

  return (
    <div style={{ background: "rgba(0,0,0,0.5)", padding: 20 }}>
      <h3>This is a modal</h3>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </div>
  );
});

export default function ModalExample() {
  const modalRef = useRef(null);

  return (
    <div>
      <button onClick={() => modalRef.current.open()}>Open Modal</button>
      <Modal ref={modalRef} />
    </div>
  );
}
