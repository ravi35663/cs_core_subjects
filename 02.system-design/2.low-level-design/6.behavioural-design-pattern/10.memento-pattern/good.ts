//Memento class:
class ResumeMemento{
    constructor(
        public readonly name: string,
        public readonly education: string,
        public readonly experience: string,
        public readonly skills: string[],
    ){}
}

// Originator:
class ResumeEditor{
    private name: string = ''
    private education: string = ''
    private experience: string = ''
    private skills: string[]= []

    setName(name:string){
        this.name = name;
    }

    setEducation(education: string): void{
        this.education = education;
    }

    setExperience(experience:string){
        this.experience = experience;
    }

    setSkills(skills: string[]){
        this.skills= [...skills]
    }

    printResume():void{
        console.log("Printing resume data: ",this);
    }

    // Save current state:
    save(): ResumeMemento{
        return new ResumeMemento(
            this.name,
            this.education,
            this.experience,
            [...this.skills]
        )
    }

    // Restore previous state:
    restore(memento: ResumeMemento): void{
        this.name = memento.name;
        this.education = memento.education;
        this.experience = memento.experience;
        this.skills = [...memento.skills]
    }
}

// Caretaker
class ResumeHistory{
    private history: ResumeMemento[] = []
    save(editor: ResumeEditor){
        this.history.push(editor.save())
    }
    undo(editor:ResumeEditor){
        if(this.history.length === 0){
            console.log("Nothing to undo")
            return;
        }
        const memento = this.history.pop()
        editor.restore(memento);
    }
}

// Main:
const editor = new ResumeEditor()
const hist = new ResumeHistory()

editor.setName("Alice")
editor.setEducation('B.tech CSE')
editor.setExperience("Fresher")
editor.setSkills(['Java',"DSA"])

hist.save(editor);

editor.setExperience('SDE intern at TUF')
editor.setSkills(['React','Node','SQL'])

hist.save(editor);
editor.printResume()


console.log("Hello")

hist.undo(editor)
editor.printResume()

console.log("Line 96:")

hist.undo(editor)
editor.printResume()
