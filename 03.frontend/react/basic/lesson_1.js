/**
 * <div id='parent>
 *  <div id = 'child'>
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *  </div>
 * </div>
 * const parent = React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'child'},
            React.createElement('h1',{},'I am h1 tag'))
    )
    console.log(parent);
 * 
 * 
 * 
 */ 

// This is fine for single child
// const parent = React.createElement('div',{id:'parent'},
//     React.createElement('div',{id:'child'},
//         React.createElement('h1',{},'I am h1 tag'))
// )
// console.log(parent);

//This this the core of react
// This code is look very ugly to reduce this ugliness we use JSX
const parent = React.createElement('div',{id:'parent'},[
    React.createElement('div',{id:'child'},
    [React.createElement('h1',{},'I am h1 tag'),React.createElement('h2',{},'I am h2 tag')]),
    React.createElement('div',{id:'child2'},
    [React.createElement('h1',{},'I am h1 tag'),React.createElement('h2',{},'I am h2 tag')])]
)

// const heading = React.createElement('h1',{/*attributes of tags*/id:"heading",zyx:'abc'},"Hello world from React");
// heading is react element which is javascript object 
// Browser convert ReactElement into HTML Element  
// all the codes come to to root element and root.render run all the react code in browser
const root = ReactDOM.createRoot(document.getElementById('root'));
// Here react is only working inside root div other than root there is no react
// This is why react is a library not a framework because it can fit any where in html
// React can we used inside existing project as well 
root.render(parent);