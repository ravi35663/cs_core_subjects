import React from "react";
console.log("What is in React ",React);
class UserClass extends React.Component{
    static my_name="Ravi kumar"
    state = {
        "count":10000
    }
    // Life cycle methods of class based component in react.
    
    /* 
        When Class is instantiated first constructor is called of the class then it render the 
        page and after that any life cycle method is called. 
    */
   // componentDidMount can be async or normal function 
   async componentDidMount(){
        // you can make componentDidMount async
        // console.log("children Did mount is called")
        // API call
        const data = await (await fetch('https://api.github.com/users/ravi35663')).json();
        this.setState({...this.state,userInfo:data});
        console.log("Data is ",data);
    }
    constructor(props){
        super(props) // super is used to get props values
        // Always create states in constructor function
        console.log("COunt value is: ",this.state)
        this.state = {
            // count: 0,
            count_2: 1,
            userInfo:{
                name:"Dummy",
                location:"USA",
                login:'ravi',
                avatar_url:'https://avatars.githubusercontent.com/u/430232/v2'
            }
        }
        // console.log("children Constructor is called")
    }
    // After initial componentDidMount, whenever the component is rendered the componentDidUpdate will called.
    componentDidUpdate(){
        console.log("Component did update is called");
    }
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        console.log("Static variable: ",UserClass.my_name)
        // console.log("children Render is called")
        // const {location,name,contact} = this.props;
        const {name,location,login,avatar_url} = this.state.userInfo;
        const {count,count_2} = this.state;
        return( 
            <div className="user-card">
                <h1>Count: {count}</h1>
                <button onClick={()=>{
                    // never update state variable directly, this is wrong implementation
                    // this.state.count++; 
                    // below code is correct implementation
                    this.setState({...this.state,count:this.state.count+1})
                }}>Increase Count</button>
                <h1>Count 2: {count_2}</h1>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {login}</h4>
                <img src={avatar_url}/>
            </div>)
    }
}
export default UserClass;

/*
    => Mounting life Cycle (1st)
        - Constructor is called
        - render is called with dummy data
        - componentDidMount()
            - <API call is made>
            - <this.setState called> -> state variable is updated
    
    => Updating cycle is called (2nd)
        - render method is called with API data 
        - <HTML> is loaded with API data
        - then called componentDidUpdate()
    
    => Unmounting
        - this method is called only when just our component unmounted
        - when you go to new page then is component will unmounted


*/