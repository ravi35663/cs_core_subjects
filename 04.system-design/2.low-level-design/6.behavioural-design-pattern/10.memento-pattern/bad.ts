/*
=>  Memento Design Pattern:
    -   Assume we are building a resume editor where a user can make changes to their resume - such as name, 
        education, experience, or skills and may also want the ability to undo or redo changes. 
        To do this, we need a way to take snapshot of the resume at any point in time restore it later.
*/

// Originator class: store the current state of the resume.
class ResumeEditor{
    public name:string = ''
    public education: string = ''
    public experience: string = ''
    public skills: string[] = []
}

// Memento class: stores a snapshot of the ResumeEditor:
class ResumeSnapshot{
    private name: string;
    private education: string;
    private experience: string;
    private skills: string[]

    constructor(editor: ResumeEditor){
        this.name = editor.name;
        this.education = editor.education;
        this.experience = editor.experience
        this.skills = [...editor.skills];
    }

    // Restore the stored state back to ResumeEditor:
    restore(editor: ResumeEditor){
        editor.name = this.name;
        editor.education = this.education;
        editor.experience = this.experience
        editor.skills = [...this.skills];
    }
}

// Main:
const editor = new ResumeEditor()
editor.name = 'Alice'
editor.education = 'B.tech in CSE'
editor.experience = '2 Years at Epam System'
editor.skills = ['Javascript','SQL','TS']

// Create a snapshot before making any changes:
const snapshot = new ResumeSnapshot(editor)

// Modify the resume:
editor.name = "Alice Johnson"
editor.skills.push("Node")


console.log("After change:")
console.log("Name ",editor.name)
console.log("Skills: ",editor.skills.join(','))


// Restore previous state using snapshot:
snapshot.restore(editor);

console.log("After undo:")
console.log("Name: ",editor.name)
console.log("Skills: ",editor.skills.join(','))