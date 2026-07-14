/*
    Let's say we're building a simple remote control system where devices like lights and air conditioner 
    can be turned on and off.
    Below is the naive approach so doing this.
*/

// Receive class:
class Light{
    on(){
        console.log("Light on")
    }
    off(){
        console.log("Light off")
    }
}

class AC{
    on(){
        console.log("Ac on")
    }
    off(){
        console.log("Ac off")
    }
}
// Invoker class:
class NaiveRemoteController{
    private lastAction: string = '';

    constructor(private light: Light, private ac:AC){}
    pressLightOn(){
        this.light.on();
        this.lastAction = 'LIGHT_ON'
    }

    pressLightOff(){
        this.light.off();
        this.lastAction = 'LIGHT_OFF'
    }

    pressACOn(){
        this.ac.on();
        this.lastAction = 'AC_ON'
    }

    pressACOFF(){
        this.ac.off() ;
        this.lastAction = 'AC_OFF'
    }

    // Undo last action:
    pressUndo(){
        switch(this.lastAction){
            case 'LIGHT_ON':{
                this.light.off()
                this.lastAction = 'LIGHT_OFF'
                break;
            }
            case 'LIGHT_OFF':{
                this.light.on();
                this.lastAction = 'LIGHT_ON'
                break;
            }
            case 'AC_ON':{
                this.ac.off();
                this.lastAction = 'AC_OFF';
                break;
            }
            case 'AC_OFF':{
                this.ac.on();
                this.lastAction = 'AC_ON'
                break;
            }
            default:{
                console.log("No action to undo")
            }
        }
    }
}

// Client code:
const light = new Light();
const ac = new AC();


const remote = new NaiveRemoteController(light,ac);
remote.pressLightOn()
remote.pressACOn()
remote.pressLightOff()

remote.pressUndo(); // light off -> Light On
remote.pressUndo(); // light On  -> Light Off
/*
=> Issues with the code:
    1) Tight Coupling:
        - The NaiveRemoteController class directly calls methods on the Light and AC classes. 
        - If additional devices needed to add in future, changes will require in remote control class. 
        - This will violate the OCP.

    2) Lack of flexibility:
        -   The commands are hardcoded in the remote control class. If new actions or different command 
            sequences are required, modifying the remote control is necessary, leading to potential 
            maintenance challenges.
            
    3) 
*/