// this is mongodb driver
const {MongoClient} = require('mongodb');

let dbConnection;
module.exports = {
    connectDb: (cb)=>{
        MongoClient.connect('mongodb://localhost:27017/bookstore').then((client)=>{
            dbConnection  = client.db()
            return cb();
        }).catch(err=>{
            console.log("Error while connecting to database",err);
            return cb(err);
        })
    },
    // just returning the single value
    getDb: ()=> dbConnection
}