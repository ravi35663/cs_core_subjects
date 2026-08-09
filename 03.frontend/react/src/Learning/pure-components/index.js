import React from "react";
/*
==> Pure Components:
    ->  A PureComponent in React is a component that performs a shallow comparison of its 
        props and state to determine if it should re-render. This helps in optimizing 
        performance by preventing unnecessary updates.

    ->  In functional components you achieve it using React.memo, that means the components 
        only rendered if props value is changed
*/

const App = ({text})=>{
    return (<div>
        {text}
    </div>)
}

export default React.memo(App);

/*
    In class based components:
    
    import React, { PureComponent } from 'react';

    class MyComponent extends PureComponent {
    render() {
        return (
        <div>
            {this.props.text}
        </div>
        );
    }
    }

    export default MyComponent;

*/