/*
==> Virtual DOM:
    ->  Virtual DOM is in-memory representation of actual dom in react.
    ->  Virtual DOM allow react to update UI efficiently by finding the difference 
        (diffing) between the current and previous states and then updating only 
        necessary part of actual dom.
    ->  React creates a virtual dom tree from components
    ->  When state changes, React updates the virtual DOM.
*/
/*
==> Shallow DOM:
    ->  "Shallow DOM" isn't a standard term in React. However shallow dom rendering is 
        a concept used in testing.
       
    ->  It render a components without rendering its children, providing a way to test 
        components in isolation.
    
    ->  Using shallow from Enzyme (a testing utility) to render a component without its 
        children.
*/

import { shallow } from 'enzyme';
import MyComponent from './MyComponent';

const wrapper = shallow(<MyComponent />);

/*
==> Real DOM:
    ->  Real dom is an actual representation of element in the browser.
    ->  Manipulating the real DOM is slower because every change causes the browser 
        to re-render part or all of the page.
    ->  Directly manipulating DOM elements with vanilla JavaScript or jQuery.
        document.getElementById('name').textContent = "Ravi"
*/
/*
    Virtual DOM: Efficient, in-memory representation used by React to optimize updates.
    Shallow DOM: A testing concept for rendering components in isolation.
    Real DOM: The actual DOM elements in the browser, slower to update compared to the virtual DOM.
*/
/*
==> Virtual DOM :-
    ->  React does not update the real DOM directly instead it updated the virtual DOM.
    ->  As per the w3.org, DOM defines the logical structure of documents & the way a 
        document is accessed and manipulated.

=> Element Re-Rendering process :-
                                  [DOM]
                                    |
    [HTML] --> [Parser HTML] -> [DOM tree]    [Layout]
                                    |           |
                                [Attachment] -> [Render Tree] -> [Painting] -> [Display On Browser]
                                    |
    [Style] --> [CSS Parser] -> [style rule]

    ->  Re-calculating the CSS and changing layouts uses very complex algorithm & they 
        affect the performance. Hence updating a real dom does not involve just updating 
        the DOM but, it involve a lot of other process like.
            -> Re-Calculating Css   
            -> Changing layouts
            -> attachment of parsed HTML and CSS
            -> ..and so on.

    ->  All the process repeated each time you update the DOM irrespective of updating 
        the same dom. this is why updating a real dom is slow.

==> How virtual DOM  solve this problem :-
    ->  Virtual DOM is a in-memory representation of actual DOM/real-DOM.
    ->  Virtual DOM is lightweight javascript object (a javascript Object). Which is a 
        copy of real DOM.

==> Updating a virtual-DOM in react is faster because React uses these.
    -> Efficient Diff algorithm 
    -> Batched Update operation
    -> Efficient Update of subtree only
    -> uses observable instead of dirty checking to detect changes.

Note: 
1)  angular uses dirty checking to find this models which have changed.This dirty checking
    process run after in a cycle after a specified time. As the application grow, checking 
    the whole model reduces the performance and thus makes application slow.
    
2)  ReactJS uses observable’s to find the modified components. Whenever setState() method 
    is called on any component, ReactJS makes that component dirty and re-renders it.

3)  Whenever setState() method is called, ReactJS creates the whole Virtual DOM from scratch. 
    Creating a whole tree is very fast so it does not affect the performance. 
    At any given time, ReactJS maintains two virtual DOM, one with the updated state 
    Virtual DOM and other with the previous state Virtual DOM.

4)  ReactJS using diff algorithm compares both the Virtual DOM to find the minimum 
    number of steps to update the Real DOM.

5)  Finding the minimum number of modifications between two trees have complexity in the 
    order of O(n^3). 
    But react uses a heuristic approach with some assumptions which makes the problems to 
    have complexity in the order of O(n).

==> React uses these steps to find the difference between two Virtual DOM:-

1) Re-render all the children if parent state has changed :-
    If the state of a component has changed, then ReactJS re-renders all the child 
    components even if child components are not modified. 
    To prevent the unwanted re-render of the child components we can use 
    shouldComponentUpdate() component life cycle method or useMemo or React.memo in 
    functional component. This will further help in boosting performance.

2) Breadth First Search :-
    ReactJS traverse the tree using BFS. Consider the below tree. States of element B and 
    H have changed. So when using BFS ReactJS reached element B it will by default 
    re-render the element H. This is the reason to use BFS for tree traversal.
                     (A)
                    /    \
                   /      \
                 [B]       (C)
                 /  \      /  \
                /    \    /    \
              (D)    (E) (F)   (G)
              /
             /
            [H]

3) Reconciliation: 
   It is the process to determine which parts of the Real DOM need to be updated. 
   It follows the below steps:
    1) Two elements of different types will produce different trees.
    2) The developer can hint at which child elements may be stable across different renders 
       with a 'key' prop.

4) Batch Update :
    -> ReactJS using the diff algorithm to find the minimum number of steps to update the Real 
       DOM. Once it has these steps, it executes all the steps in one event loop without 
       involving the steps to repaint the Real DOM. 
       Thus, if there are more element which gets updated ReactJS will wait for the event loop 
       to finish then, in bulk will update the real DOM with all the updated elements.

    -> Once all the steps are executed, React will repaint the Real DOM. This means during 
       the event loop, there is exactly one time when the Real DOM is being painted. 
       Thus all the layout process will run only on time for updating the real DOM.

===> SSR vs CSR (Server-Side-Rendering VS Client-Side-Rendering):-
=> SSR :-
    -> server-side-rendering is when you request a HTML page from the server and server 
        serve you a HTML page.
    -> SSR-at request time:-
        Server side rendering may happen at request-time, in which case the server dynamically 
        generates the HTML for each URL request at run time.
        This is also called Dynamic Server Side Rendering.

    -> SSR-at build time:
        Alternatively, the HTML for the web pages may be pre-generated on the server side at 
        “build” time, and this pre-generated static HTML is returned to the browser, 
        when the webpage is requested
        i.e. HTML is pre-generated, and is not generated on the fly at request-time.
        This is also called Pre-rendering.

==> Client Side Rendering (CSR):
-> Client Side Rendering means generating the HTML components on the browser side, by 
    executing Javascript code within the browser that manipulates the HTML DOM to build 
    the HTML nodes.
*/