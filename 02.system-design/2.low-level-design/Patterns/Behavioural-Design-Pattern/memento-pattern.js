/*
==> Memento Design Pattern:
    ->  The Memento Pattern is a behavioral design pattern used to capture and restore an object's state 
        without violating its encapsulation. It is often used to implement undo/redo functionality.
*/

/*

==> Why Use the Memento Pattern?
    1)  Encapsulation: 
        It allows the internal state of an object to be saved and restored without exposing its details 
        to external entities.
    
    2)  Undo/Redo Functionality: 
        Enables restoring an object to a previous state for features like undo/redo.
    
    3)  State Management: 
        Useful in applications where you need to save intermediate states 
        (e.g., text editors, drawing apps).

    4) Any System that require history management, we can use Memento Pattern;
*/

/*
Key Components
    1)  Originator: The object whose state needs to be saved/restored.
    2)  Memento: A snapshot of the Originator’s state.
    3)  Caretaker: Manages the history of Mementos for undo/redo operations.
*/

/*
==> Problem Statements:
    How to provide 'undo/redo' functionality or state restoration without exposing the object's 
    internal state and breaking encapsulation.

==> Solution:
    The Memento pattern captures the internal state of an object in a memento, allowing the object to restore
    its state later on without reveling internal details.
*/ 

// Originator: The object whose state we want to manage
class Editor{
    constructor(){
        this.content = "";
    }
    
    setContent(content){
        this.content = content;
    }

    getContent(){
        return this.content;
    }

    save(){
        return new Memento(this.content);// Save the current state of the editor
    }

    restore(memento){
        this.content = memento.getContent(); //  *Restore to a previous state
    }
}

// Memento: Store the state (This is taking snapshot of current state)
class Memento{
    constructor(content){
        this.content = content;
    }

    // Get previous state content
    getContent(){
        return this.content;
    }
}


// Caretaker: Manages Mementos
class History{
    constructor(){
        this.stack = [];
        this.redoStack = [];
    }

    push(memento){
        this.stack.push(memento);
        this.redoStack = [] // Clear redo stack when new action is taken
    }

    undo(){
        if(this.stack.length == 0){
            return null;
        }
        const memento = this.stack.pop();
        this.redoStack.push(memento);
        return memento;
    }

    redo(){
        if(this.redoStack.length == 0){
            return null;
        }
        const memento = this.redoStack.pop();
        this.stack.push(memento);
        return memento;
    }

    // redo() {
    //     if (this.redoStack.length > 0) {
    //       const memento = this.redoStack.pop();
    //       this.stack.push(memento);
    //       return memento;
    //     }
    //     return null;
    //   }
}


// Example Usage
const editor = new Editor();
const history = new History();

editor.setContent("State 1");
history.push(editor.save()); // Save State 1
editor.setContent("State 2");
history.push(editor.save()); // Save State 2

editor.setContent("State 3");
console.log("Current Content:", editor.getContent()); // State 3

editor.restore(history.undo()); // Undo to State 2
console.log("After Undo:", editor.getContent()); // State 2


editor.restore(history.undo()); // Undo to State 1
console.log("After Undo:", editor.getContent()); // State 1


editor.restore(history.redo()); // Redo to State 1
// console.log("After Redo:", editor.getContent()); // State 1
// editor.restore(history.redo()); // Redo to State 2
// console.log("After Redo:", editor.getContent()); // State 2
