/*

*/

// Mediator Interface:
interface DocumentSessionMediator{
    broadcastChange(change: string, sender: User): void;
    join(user:User): void
}

// User class:
class User{
    constructor(
        protected name: string,
        protected mediator: DocumentSessionMediator
    ){}

    // Make a change:
    makeChange(change: string): void{
        console.log(`${this.name} edited the document: ${change}`);
        this.mediator.broadcastChange(change, this);
    }

    receiveChange(change: string, sender: User): void{
        console.log(`${this.name} saw change from ${sender.name}: ${change}`)
    }

    // Getter:
    getName():string{
        return this.name
    }
}

// Concrete Meditator:
class CollaborativeDocument implements DocumentSessionMediator{
    private users:User[] = [];

    join(user: User): void {
        this.users.push(user)
    }

    broadcastChange(change: string, sender: User): void {
        for(let user of this.users){
            if(user !== sender){
                user.receiveChange(change, sender);
            }
        }
    }
}

// Client Code:
const documentSession = new CollaborativeDocument()
//  Creating users:
const alice = new User('Alice',documentSession)
const bob = new User('Bob',documentSession)
const charlie = new User('Charlie',documentSession)


// Joining the collaborating document:
documentSession.join(alice)
documentSession.join(bob)
documentSession.join(charlie)

// users making changes
alice.makeChange("Adding project title")
bob.makeChange("Corrected grammar in paragraphs 2")