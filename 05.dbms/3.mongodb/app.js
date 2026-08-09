const express = require('express')
const app = express();

const {getDb,connectDb} = require('./db');
const { ObjectId } = require('mongodb');

let db;
// Mongodb connection
connectDb((err)=>{
    if(!err){
        app.listen(3000,(err)=>{
            if(!err){
                console.log("App is listening at port 3000.")
            }
        })
         db = getDb();
    }
})
// used to parse req data into json
app.use(express.json())

app.get('/books',(req,res)=>{
    // here find returns a cursor which point all the returns documents
    // forEach is a cursor method for db.collection.find
    let books = [];
    // req.query -> get query data (data after ?)
    const page = Number(req.query.page);
    console.log("Page is ",page);
    const perPage = 3;
    db.collection('books')
    .find()
    .sort({author:-1})
    .skip(page*perPage)
    .limit(perPage)
    .forEach((book)=>{
        books.push(book)
    })
    .then(()=>{
        res.status(200).json({books})
    })
    .catch(err=>{
        res.status(500).send({err});
    })
})

app.get('/books/:id',(req,res) => {
    if(ObjectId.isValid(req.params.id)){
        const _id = new ObjectId(req.params.id);
        db.collection('books').findOne({_id})
        .then(book=>{
            res.status(200).json({book})
        })
        .catch((err)=>{
            res.status(500).json({err});
        })
    }
    res.status(500).json({err:"Not valid id"})

})

app.post('/books',(req,res)=>{
    const book = req.body;
    db.collection('books')
    .insertOne(book)
    .then((book)=>{
        res.status(200).json({book})
    })
    .catch(err=>{
        res.status(500).json({err});
    })
})

app.delete('/books/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        const _id = new ObjectId(req.params.id);
        db.collection('books').deleteOne({_id})
        .then(result=>{
            res.status(200).json({result});
        })
        .catch(err=>{
            res.status(500).json({err});
        })
    }
})


app.patch('/books/:id',(req,res)=>{
    let _id = req.params.id;
    if(ObjectId.isValid(_id)){
        _id = new ObjectId(_id);
        db.collection('books')
        .updateOne({_id},{$set:req.body})
        .then(result=>{
            res.status(200).json({result})
        })
        .catch(err=>{
            res.status(500).send({err});
        })
    }else{
        res.status(500).send({err:"Invalid id"});
    }
})