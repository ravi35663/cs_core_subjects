/*
=> React Performance Basics:
1) Re-render ≠ DOM update:
    - React may re-render, but the DOM only updates if something changed.
    - Performance problems come from:
        Too many re-renders
        Expensive renders
        Large trees updating unnecessarily

2) Why components re-render:
    - A component re-renders when:
        1) Its state changes
        2) Its props change
        3) Its parent re-renders
        4) Its context value changes
*/

/*
3. React.memo – skip unnecessary re-renders:
*/
const Button = React.memo(({ onClick }) => {
  console.log("render");
  return <button onClick={onClick}>Click</button>;
});
// Only re-renders when props change.

/*
=> 4. useCallback – stable function references:
*/
// Without it: 
const handleClick = () => setCount(c => c + 1); // New function every render → child re-renders.
// with it:
/*
const handleClick = useCallback(() => {
  setCount(c => c + 1);
}, []);
*/

/*
=> 5. useMemo – cache expensive computations:
*/ 
const filtered = useMemo(() => {
    return items.filter(i => i.active);
}, [items]); // Only recomputes when items changes.

/*
6.Key rule:
    Memoization is for props, not state.
    If state changes, the component must re-render.
*/
/*
=>  7. Avoid inline objects & functions in JSX:
*/
// Bad:
<Component style={{ margin: 10 }} />
// Good:
const style = useMemo(() => ({ margin: 10 }), []);
<Component style={style} />

/*
=> 8.Split state by responsibility:
*/ 
// Bad:
const [state, setState] = useState({ a:1, b:2 });

// Good: Less re-rending
const [a, setA] = useState(1);
const [b, setB] = useState(2);

/*
=> 9. Lift state only when needed:
    - Don’t store everything in parent.
*/

/*
=>  10. List rendering – keys + virtualization:
    {items.map(item => <Row key={item.id} item={item} />)}
    - For big lists → use:
        - react-window
        - react-virtualized
*/
/*
=> 11. Context causes full subtree re-renders:
    Fix:
        Split contexts
        Or use selectors (Zustand, Redux, Jotai)
*/
/*
12. useLayoutEffect vs useEffect
    - 'useLayoutEffect' blocks paint → expensive
    - Use only when measuring layout
*/
/*
=>  13. Throttle & debounce expensive events
    - const onScroll = useCallback(throttle(handleScroll, 200), []);
*/
/*
14. Production tools
    React DevTools → “Highlight Updates”
    Profiler tab
    Chrome Performance tab
*/
/*
Note:
    I minimize unnecessary renders using memoization, split state and 
    context, avoid prop identity changes, and virtualize large lists
*/