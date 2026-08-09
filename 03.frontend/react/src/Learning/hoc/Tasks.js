/*
==> HOC: (Higher order component):-
    ->  HOC is a function that takes a component and return a enhanced component.
    ->  HOCs allow you to reuse component logic, share code, and compose components in a more modular 
        and reusable way.

==> Why do we use HOC:-
    -> Code Reusability:    
    -> Cross-Cutting Concerns:
        HOCs are often used for cross-cutting concerns, such as authentication, logging, or tracking. 
        These concerns can be applied to multiple components without cluttering the individual components 
        with the related logic.
*/
import SpecialTask from "./SpecialTask";
import Task from "./Task";

const dummyTasks = [
    {name:"call",rating:8},{name:"Meeting",rating:7},{name:"Proposal",rating:3},{name:"Pitch",rating:5},
    {name:"Scrum",rating:2},{name:"Demo",rating:4},{name:"Gym",rating:6},{name:"Movie",rating:7}]
const HOCTasks = ()=>{
    const SpecialTaskHOC = SpecialTask(Task);
    return <div>
        {dummyTasks.map(item=>{
            return item.rating % 3==0?<SpecialTaskHOC item={item} key={item.name}/>:< Task item={item} key={item.name}/>
        })}
    </div>
};

export default HOCTasks;