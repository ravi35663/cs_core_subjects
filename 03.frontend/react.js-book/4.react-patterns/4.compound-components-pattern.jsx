/*
=> Compound Components Pattern:
    -   A React pattern where multiple related components are designed to work 
        together as one unit.
    -   A parent component controls shared state and behavior for its child 
        components.
    -   Child components automatically know how to work together without passing 
        many props.

=> When to use it:
    -   When components depend on each other to function correctly.
    -   When you want to give users flexibility in arranging components.
    -   When you want to keep the component structure clean and readable.

=> When not to use it:
    -   When components are independent and do not need to share logic.
    -   When the UI is simple and does not need this pattern.

=> Advantages:
    -   Makes related components work smoothly together.
    -   Reduces prop drilling and keeps the API clean.
    -   Makes components flexible and reusable.

=> Disadvantages:
    -   Can be confusing at first to understand how components connect.
    -   Adds extra complexity if used for simple components.
*/

import React, { useState } from 'react';

// Single Tab component:
const Tab  = ({children}) => {
    return <>{children}</>
}


// Tabs container component
const Tabs = ({children}) =>{
    const [activeTab,setActiveTab] = useState(0);

    return (
        <div>
            <div className='tab-header'>
                {React.Children.map(children,(child,index)=>{
                    if(React.isValidElement(child)){
                        return (
                            <div 
                                className={`tab-item ${index == activeTab?'active':''}`}
                                onClick={()=> setActiveTab(index)}
                            >
                                {child.props.label}
                            </div>
                        )
                    }
                    return null;
                })}
            </div>

            <div className='tab-content'>
                {React.Children.map(children,(child,index)=>{
                    if(index == activeTab){
                        return <>{child}</>
                    }
                    return null;
                })}
            </div>
        </div>
    )
}
export {Tab,Tabs}