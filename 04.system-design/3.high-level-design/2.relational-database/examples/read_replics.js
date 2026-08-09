const mysql = require('mysql2/promise')
const express = require('express');
const app = express();
/*
==> Master-pAssword: ravi-master-password
==> Replica Password: replpass
Still pending to implement

*/
app.use(express.json());

// Create Two separate pools:

const masterPool = mysql.createPool({
    host:'', // Add master DB host
    user:'root',
    password:'password',
    database:'add-masterdatabase-name'
})

const readReplicaPool = mysql.createPool({
    host:'', // Add master DB host
    user:'root',
    password:'password',
    database:'add-masterdatabase-name'
})

// Write Route -> Master DB:
app.post('/users',async (req,res)=>{
    const {name} = req.body
    try {
        const [result] = await masterPool.query(
            "INSERT INTO users (name) VALUES (?)",
            [name]
        );
        return res.json({message:"User added ", addedId: result.insertId})
    } catch (error) {
        res.status(500).json({error:error.message});
    }
})

// Read data from read-replica:
app.get('/users',async(req,res)=>{
    try{
        const [rows] = await readReplicaPool.query("SELECT * FROM users");
        return res.json(rows);
    }catch(err){
        return res.status(500).json({error:err.message});
    }
})

const port = process.env.PORT || 3005
app.listen(port,(err)=>{
    if(!err){
        console.log("Application is running at port: ",port);
    }
})