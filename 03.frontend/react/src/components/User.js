const User = ({name,location,contact})=>{
    console.log("Name is ",name);
    return( 
    <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
    </div>)
}

export default User;