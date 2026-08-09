import { render, screen } from '@testing-library/react';
import Header from '../Header';

// here test define single test case
test('Testing Header',async ()=>{
    // render() mounts the <Header /> React component into a virtual DOM provided by React Testing Library.
    render(<Header title={'Hello World'}/>);

    // const headerElement = screen.getByText(/hello worlds/i) // it will be failed
    
    const headerElement = screen.getByText(/hello world/i) //'/hello world/i' this is regular expression:
    /*
        screen.getByText() finds an element in the rendered output by its text content.
        /hello world/i is a regular expression:
        / ... / means regex
        hello world is the pattern
        i makes it case-insensitive
        So it matches:
        "HELLO WORLD"
        "Hello World"
        "hello world"
        etc.
    */

    expect(headerElement).toBeInTheDocument();
    /*
        expect() is an assertion. It checks if something is true.
        toBeInTheDocument() verifies:
        The element exists in the DOM.
        React Testing Library extends Jest with this matcher.
    */

});

// it('Should test same time of header title',async()=>{
//     render(<Header title={'Todo Header'}/>)
//     // const headerElement = screen.getByText('Todo Header');// Exact same
//     // const headerElement = screen.getByText(/todo header/i)
//     // Role is tag name
//     const headerElement = screen.getByRole('heading')
//     expect(headerElement).toBeInTheDocument();
// })

// it('Should be same text',async()=>{
//     render(<Header title={'todo Header'}></Header>)
    
//     const rolesElement = screen.getByRole( // Find an element by its ARIA role
//         'heading', // Looking for a heading element (h1, h2, h3...)
//         {name:'todo Header'} // The accessible name must equal "Dogs"
//     );
//     expect(rolesElement).toBeInTheDocument(); //Assert: the heading with name "Dogs" should exist
// })

// it('Should be same text',async()=>{
//     render(<Header title={'todo Header'}></Header>)

//     const titleElement = screen.getByTitle('Header');
//     expect(titleElement).toBeInTheDocument(); //Assert: the heading with name "Dogs" should exist
// })


// it('Should be same text',async()=>{
//     render(<Header title={'todo Header'}></Header>)

//     const titleElement = screen.getByTestId('header-1');
//     expect(titleElement).toBeInTheDocument(); //Assert: the heading with name "Dogs" should exist
// })

/*
==> Explore find by:
*/ 
// test('Same test',async ()=>{
//     render(<Header title={'Hello World'}/>)
//     const element = await screen.findByText(/hello worlD/i);
//     expect(element).toBeInTheDocument()
// })

/*
    Query By:
*/

// test('Same test using query by',async()=>{
//     render(<Header title={'Hello World'}></Header>)
//     const element = screen.queryByText(/cat/i);
//     expect(element).not.toBeInTheDocument();// Check cat is not into the document
// })

/*
=> Get by all roles
*/

// test('Same test using query by',async()=>{
//     render(<Header title={'Hello World'}></Header>)

//     const elements = screen.getAllByRole('heading')
//     expect(elements.length).toBe(2);// 
// })