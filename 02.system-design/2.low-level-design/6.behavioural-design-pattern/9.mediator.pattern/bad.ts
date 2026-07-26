/*
    Let's imagine a collaborative document editor where users can make changes to a shared document. 
    Each user has the ability to give access to other users, enabling them to collaborate on the same 
    document.
*/

// User class 
class User{
    private others:User[] = [];
    constructor(public name:string){}

    // Add collaborator:
    addCollaborator(user: User):void{
        this.others.push(user);
    }

    // Make a change and notify collaborators:
    makeChange(change: string): void{
        console.log(`${this.name} made a change: ${change}`)
        for(let user of this.others){
            user.receiveChange(change,user);
        }
    }

    // Receive a notification:
    receiveChange(change:string, from:User){
        console.log(`${this.name} received: ${change} from ${from}`)
    }
}

// Client Code:
const alice = new User('Alice')
const bob = new User('Bob')
const charlie = new User('Charlie')

// Alice provide access to Bob and Charlie:
alice.addCollaborator(bob)
alice.addCollaborator(charlie)

// Alice make a change:
alice.makeChange("Update the document title")


// Bob make changesL
bob.makeChange('Adding a new section to the document:')