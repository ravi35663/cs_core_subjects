const SpecialTask = (Task)=>{
    return (props)=><div style={{borderRadius:"2px",backgroundColor:"silver"}}>
        <label className="">Special Task</label>
        <Task {...props} />
    </div>
}

export default SpecialTask