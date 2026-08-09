/*
    Fragment:
        A fragment in React is a way to group multiple elements without adding extra 
        nodes to the DOM. This is useful when you want to return multiple elements 
        from a component but avoid creating unnecessary wrapper elements like <div>.
*/

/*
    Short Syntax:
        return (
            <>
                <ChildComponent1 />
                <ChildComponent2 />
            </>
        );
*/

/*
    return (
    <React.Fragment>
        <ChildComponent1 />
        <ChildComponent2 />
    </React.Fragment>
    );
*/

/*
==> Fragment Vs <>:
    ->  Both React.Fragment and the shorthand syntax <> serve the same purpose: 
        to group multiple elements without adding extra nodes to the DOM. 
        However, there are a few differences between them:
1) You can add attributes in 'Fragment' but not in <>
    -> e.g. <React.Fragment key={id}> {elements}</React.Fragment> 
*/

