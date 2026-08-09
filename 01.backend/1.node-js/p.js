process.on('message',(msg)=>{
    console.log("Child received: ",msg)
    process.send("Pong from child");
})