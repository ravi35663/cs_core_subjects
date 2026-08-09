/*
    How to optimize react application :-
*/
/*
    1) Use React.memo: Prevents unnecessary re-renders of functional components.
        const MyComponent = React.memo(function MyComponent(props) {
            return <div>{props.text}</div>;
        });

    2) Use PureComponent: Prevents unnecessary re-renders of class components.
        class MyComponent extends React.PureComponent {
            render() {
                return <div>{this.props.text}</div>;
            }
        }
    3) Use Code Splitting: Split code into smaller chunks using React.lazy and Suspense.
        const MyComponent = React.lazy(() => import('./MyComponent'));
        function App() {
            return (
                <React.Suspense fallback={<div>Loading...</div>}>
                    <MyComponent />
                </React.Suspense>
            );
        }
    4)  Optimize State Management: Lift state up only when necessary, and use Context API or 
        Redux efficiently.
    
    5) Avoid Inline Functions and Objects: Define functions outside the render method.
        const handleClick = () =>   //handle click ;
        <button onClick={handleClick}>Click Me</button>
*/ 

/*
How to scale react applications:
    Scaling React applications involves ensuring they can handle increased 
    complexity, maintainability, performance, and team collaboration as they 
    grow larger. 
        => Here are key strategies for scaling React applications:
        1) Component Architecture: 
            Organize components into reusable and modular units.
        2) State Management: 
            Depending on the complexity of your application, consider using a state 
            management library like Redux, Recoil, or Zustand to manage global state.
        3) Code Splitting:
            Split your application into smaller bundles using dynamic imports or 
            React.lazy for lazy loading. This reduces initial load time and improves 
            performance, especially for large applications.
        4) Optimize Performance:
            Profile and optimize performance using tools like Chrome DevTools and 
            React Developer Tools
*/