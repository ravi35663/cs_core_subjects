import { screen,render, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

/*
==> Testing with fire events:
*/
const mockSetTodo = jest.fn();

describe('Add input block',()=>{
    test('should render input element',()=>{
        render(<AddInput 
                    todos={[]} 
                    setTodos={mockSetTodo}
            />)
        const inputElement  = screen.getByPlaceholderText(/Add a new task here.../i)
        expect(inputElement).toBeInTheDocument();
    })

    // When we start typing into the input, then test
    it('should be able to type in input',()=>{
        render(
            <AddInput 
                todos={[]}
                setTodos={mockSetTodo}
            />
        );
        const inputElement  = screen.getByPlaceholderText(/Add a new task here.../i);
        fireEvent.change(inputElement,{target:{value:'Go to movie'}})
        expect(inputElement.value).toBe('Go to movie');
    })

    test('should have empty input when add button clicked',()=>{
        render(<AddInput  todos={[]} setTodos={mockSetTodo} />)
        const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
        const buttonElement = screen.getByRole('button'); 
        fireEvent.change(inputElement,{target:{value:'Get The Grocery.'}})
        // const buttonElement = screen.getByRole('button',{name:/Add/i}); // if more than one button exists then add name
        fireEvent.click(buttonElement)
        expect(inputElement.value).toBe('');
    })
})