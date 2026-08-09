const express = require('express');
require('dotenv').config();
const { sendEmail } = require('./aws-services/aws-ses');
const app = express();

// app.use((req,res,next)=>{
//     console.log("This demo application to test aws service:");
//     next();
// })
// express.json

app.get('/send-email',sendEmail);

const port = 3000;
app.listen(port,(err)=>{
    if(!err){
        console.log("App is running at port: ",port);
    }
})