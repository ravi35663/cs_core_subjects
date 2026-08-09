// import { Screen } from "@testing-library/react";
import { screen,render } from "@testing-library/react";
import TodoFooter from '../TodoFooter'
import { BrowserRouter } from "react-router-dom";


//
const MockTodoFooter = ({numberOfIncompleteTasks})=>{
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks}/>
        </BrowserRouter>
    )
}
/*
==> Assertions: toBeInTheDocument, toBeTruthy ..etc are assertions.
*/

// Describe: to groups 
describe('TodoFooter',()=>{

    // You can write other describes as well
    describe('function test',()=>{
        // here test define single test case
        test('Should test incomplete amount of tasks',async ()=>{
            // Because we're encountering Link in the Component 
            render(<MockTodoFooter numberOfIncompleteTasks={4}/>);
            const paragraphElement = screen.getByText(/4 tasks left/i) 
            expect(paragraphElement).toBeInTheDocument();
        });
    })

    // here test define single test case
    test('Should test incomplete amount of tasks',async ()=>{
        // Because we're encountering Link in the Component 
        render(<MockTodoFooter numberOfIncompleteTasks={2}/>);
        const paragraphElement = screen.getByText(/2 tasks left/i) 
        expect(paragraphElement).toBeInTheDocument();
    });

    test('Should test single task',async ()=>{
        // Because we're encountering Link in the Component 
        render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
        const paragraphElement = screen.getByText(/1 task left/i) 
        expect(paragraphElement).toBeInTheDocument();
    });
})

// // here test define single test case
// test('Should test incomplete amount of tasks',async ()=>{
//     // Because we're encountering Link in the Component 
//     render(<MockTodoFooter numberOfIncompleteTasks={2}/>);
//     const paragraphElement = screen.getByText(/2 tasks left/i) 
//     expect(paragraphElement).toBeInTheDocument();
// });

// test('Should test single task',async ()=>{
//     // Because we're encountering Link in the Component 
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByText(/1 task left/i) 
//     expect(paragraphElement).toBeInTheDocument();
// });

// test('Should test single task',async ()=>{
//     // Because we're encountering Link in the Component 
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByText(/1 task left/i) 
//     expect(paragraphElement).toBeTruthy();
// });


// test('Should test single task',async ()=>{
//     // Because we're encountering Link in the Component 
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByText(/1 task left/i) 
//     // If value is available in the document but not visible to users then test will failed. 
//     // make style to hide element like make opacity is 0;
//     expect(paragraphElement).toBeVisible(); 
// });

// test('Should test single task',async ()=>{
//     // Because we're encountering Link in the Component 
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByText(/1 task left/i) 
//     expect(paragraphElement).toContainHTML('p'); // Valid because p tag is there.
//     // expect(paragraphElement).toContainHTML('h1');  // Invalid because the h1 tag is not there
// });

// test('Should test single task',async ()=>{
//     // Because we're encountering Link in the Component 
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByText(/1 task left/i) 
//     // expect(paragraphElement).toContainHTML('p'); 
//     expect(paragraphElement).toHaveTextContent('1 task l')
// });

// test('Should test single task',async ()=>{
//     // Because we're encountering Link in the Component 
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByTestId('para') 
//     expect(paragraphElement).toHaveTextContent('1 task l')
// });
// /*
// Note:
//     We can get opposite of what we want by adding .not in assertions.
//     like:
//         expect(paragraphElement).not.toHaveTextContent('1 task l')
// */

// // Example:
// test('Should not includes "."',async ()=>{
//     // Because we're encountering Link in the Component 
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByTestId('para') 
//     expect(paragraphElement).not.toHaveTextContent('.')
// });

// test('Should not includes "."',async ()=>{
//     // Because we're encountering Link in the Component 
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByTestId('para') 
//     expect(paragraphElement.textContent).toBe('1 task left')
// });

// /*
//     // You can insert multiple assertions inside the a test like below:
//     // Recommended: One assertions per test.
// */
// test('Should not includes "."',async ()=>{
//     // Because we're encountering Link in the Component 
//     render(<MockTodoFooter numberOfIncompleteTasks={1}/>);
//     const paragraphElement = screen.getByTestId('para') 
//     expect(paragraphElement.textContent).toBe('1 task left')
//     expect(paragraphElement.textContent).toBe('1 task left')
//     // expect(paragraphElement.textContent).toBe('4 tasks left')
//     expect(paragraphElement.textContent).toBe('1 task left')
//     expect(paragraphElement.textContent).toBe('1 task left')
// });