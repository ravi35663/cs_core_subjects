/*
    Solution bad Light and AC problem with Command pattern:
*/
/*
    By applying this pattern it become easier to encapsulate requests as objects, allowing for 
    flexibility and reusable command handling. The command pattern decouples the request 
    sender(Invoker) and receiver(Light/AC) and provide an unified way to handle multiple commands and 
    actions.
*/

// Receiver classes: (Light and AC):
class Light{
    on(){
        console.log("Light is On")
    }
    off(){
        console.log("Light is off")
    }
}
class AC{
    on(){
        console.log("AC is On")
    }
    off(){
        console.log("AC is off")
    }
}

// Command Interface:
interface Command{
    execute(): void;
    undo(): void;
}

// Concrete commands:
class LightOnCommand implements Command{
    constructor(private light: Light){}

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }
}

class LightOffCommand implements Command{
    constructor(private light:Light){}

    execute(): void {
        this.light.off()
    }

    undo(): void {
        this.light.on()
    }
}

class ACOnCommand implements Command{
    constructor(private ac: AC){}

    execute(): void {
        this.ac.on();
    }

    undo(): void {
        this.ac.off();
    }
}

class ACOffCommand implements Command{
    constructor(private ac: AC){}

    execute(): void {
        this.ac.off();
    }

    undo(): void {
        this.ac.on();
    }
}

// Invoker:
class RemoteControl{
    private buttons: Array<Command | null> = new Array(4).fill(null);
    private commandHistory:Command[] = [];

    setCommand(slot: number, command:Command){
        this.buttons[slot] = command;
    }

    pressButton(slot:number){
        const command = this.buttons[slot];
        if(!command){
            console.log("No command assigned to slot: ",slot);
            return
        }
        command.execute();
        this.commandHistory.push(command);
    }

    pressUndoButton(){
        if(this.commandHistory.length == 0){
            console.log("No commands to undo: ")
            return;
        }
        const lastCommand = this.commandHistory.pop()!;
        lastCommand.undo();
    }
}

// Client code:
const light = new Light()
const ac = new AC()

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const acOn = new ACOnCommand(ac)
const acOff = new ACOnCommand(ac)

const remote = new RemoteControl();
remote.setCommand(0, lightOn)
remote.setCommand(1, lightOff)
remote.setCommand(2, acOn)
remote.setCommand(3, acOff)

remote.pressButton(0)// Light us On:
remote.pressButton(1) // Light if off
remote.pressButton(0) // Light is on
remote.pressButton(2) // ac is on

remote.pressUndoButton() // ac is off