import  TaskContext  from "./MyContext";
import { useContext } from "react";
const Task = ({children})=>{
    const {tasks,setTasks} = useContext(TaskContext);
    const topRatedTasks = ()=>{
        const topTasks = tasks.filter(item=> item.rating >=3);
        setTasks(topTasks);
    }
    console.log("Children <><>",children);
    return <div>
        {children}
        {tasks && tasks.map(item=>{
            return <h2 key={item.name}>{item.name}</h2>
        })}
        <button onClick={topRatedTasks} style={{backgroundColor:"blue"}}>Top Rated tasks</button>
    </div>

}
export default Task;