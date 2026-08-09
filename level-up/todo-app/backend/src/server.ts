import app from "./app.js";
import { sequelize } from "./infrastructure/database/sequelize.js";

const port = 3000;

async function startServer(){
    try{
        await sequelize.authenticate();
        console.log("Database is connected:")
        app.listen(port,()=>{
            console.log("Server running on port: ",port);
        })
    }catch(err){
        console.log("DB connection failed",err);
    }
}

startServer().then().catch((err:unknown)=>{
    console.log("Error while connecting db: ",err);
});