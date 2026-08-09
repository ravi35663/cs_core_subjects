import { screen,render, fireEvent } from "@testing-library/react";
import Todo from "../Todo";
import { BrowserRouter } from "react-router-dom/";

/*
    Integration testing:
*/
// Because we are using Link which is part of browserRouter
const MockTodo = ()=>{
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    )
}

/*
    This is an integration testing because two components interacting with each other
*/
describe('Todo integration testing',()=>{
    test('should add test into other component when hit button',()=>{
        render(<MockTodo></MockTodo>)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole('button',{name:/Add/i})
        fireEvent.change(inputElement,{target:{value:"Go grocery shopping"}});
        fireEvent.click(buttonElement)
        const divElement = screen.getByText(/Go grocery shopping/i);
        expect(divElement).toBeInTheDocument()
    })

    // To check multiple items:
    test('should render multiple items',()=>{
        render(<MockTodo></MockTodo>)
        const tasks = ['Go grocery shopping',"Pet my dog","Get the electricity bill","fetch the water"]
        addTasks(tasks);
        const elements = screen.getAllByTestId('data-container')
        expect(elements.length).toBe(4);
    })

    test('task should not have completed class rendered initially',()=>{
        render(<MockTodo/>)
        const tasks = ['Go grocery shopping']
        addTasks(tasks);
        const elements = screen.getByText(/Go grocery shopping/i);
        expect(elements).not.toHaveClass('todo-item-active')
    });

    // Test: when click of todo items then its style should change:
    test('task should have completed class when clicked',()=>{
        render(<MockTodo/>)
        const tasks = ['Go grocery shopping']
        addTasks(tasks);
        const element = screen.getByText(/Go grocery shopping/i);
        fireEvent.click(element)
        expect(element).toHaveClass('todo-item-active')
    });

    // Task should not have completed class when we clicked on completed class
    test('task should not have completed class when clicked',()=>{
        render(<MockTodo/>)
        const tasks = ['Go grocery shopping']
        addTasks(tasks);
        const element = screen.getByText(/Go grocery shopping/i);
        fireEvent.click(element)
        fireEvent.click(element)
        expect(element).not.toHaveClass('todo-item-active')
    });
});


function addTasks(tasks){
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole('button',{name:/Add/i})
    tasks.forEach(item=>{
        fireEvent.change(inputElement,{target:{value:item}})
        fireEvent.click(buttonElement);
    })       
}