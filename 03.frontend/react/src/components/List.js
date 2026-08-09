import React, {useContext} from "react";
import UserContext from "../utils/UserContext";
const List = ({items})=>{

    const user = useContext(UserContext)

    return <div>
        {items &&  items.map(item=>{
            return <div className="p-2 m-2 border border-gray-200 border-b-2 text-left" key={item.key}>
                <span className="font-bold">{item.name}</span>
                <br/>
                <span className="font-bold">Commented By: {user.loggedInUser}</span>
                <p className="text-sm">{item.body}</p>
            </div>
        })}
    </div>
}

export default List;