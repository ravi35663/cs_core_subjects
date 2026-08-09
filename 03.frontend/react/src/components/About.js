import UserContext from '../utils/UserContext'
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent constructor")// first this called
    }
    componentDidMount(){
        // console.log("Parent did mount is called"); // after render of all children in render, this will called.
    }
    render(){
        // console.log("Parent render is called"); // second this will called
        return (
            <div>
                <div>
                    <UserContext.Consumer>
                        {(data)=> console.log("This is the context data",data)}
                    </UserContext.Consumer>
                </div>
            <h1>About</h1>
            {/* <p>This is about page</p> */}
            {/* <User name={"Ravi"} location={"Delhi"} contact={"ravikr845430"}/> */}
            <UserClass name={"Ravi"} location={"Delhi"} contact={"ravikr845430"}/>
        </div>
        )
    }
    /*
        Note:
            when all the life cycle and life cycle of the method is mounted successfully 
            including all child components then the entire class is mounted successfully.
            ComponentDidMount is used to make API called because to show the data page after 
            initial render.
    */
}
/*
Always Remember:
    If there are multiple children in parent component and each has their own life cycle method.
    Order of execution of life cycle of children including parent;
    - Parent constructor is called
    - Parent render will called.
        - child 1 constructor is called
        - child 1 render is called
        - child 2 constructor is called
        - child 2 render is called
        - ....
        - ....
        - ....
        <DOM Updated - In a single batch (Because DOM is very expensive task for browser)>
        #Here , it optimized the application
        - child 1 componentDidMount is called
        - child 2 componentDidMount is called
    - Parent componentDidMount is called

    this is the behavior of react to optimize performance of the application
*/

export default About;
