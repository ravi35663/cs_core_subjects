# mongodb
# Collections and Documents: -
 --> Collections are used to store documents
--> Documents are used to represents individual record of the collection
--> Document is like json object in javascript. it is called BSON (Binary JSON)
    ..example of record of a User collection 
    {
        "name":"Ravi",
        "age":25,
        "email":"ravikr845430@gmail.com",
        "hobbies":["cricket","chess"],
        "_id":ObjectId("234567890drftghbjnmjn"),
        "book":{
            "title":"How to win Friends",
            "price":12
        }
    }
    
==> Inserting one record in collection
    db.books.insertOne({title:"Atomic habit",rating:8,pages:400,genres:['self improvement','motivation']})
--> If collection does not exists , mongod already create the collection
--> db.collectionName.insertMany([{},{}]) : -> use to insert many
    e.g. 
    db.books.insertMany([
        {
            title:"How to win friends and influence them",
            genres:['motivation','self impro','habit'],
            rating:2,
            pages:560,
            author:'James Clear',
            review:[
                {name:'Yoshi',body:'Nice book'},
                {name:'Ravi',body:'Life chaning book'},
                {name:'Sumit',body:'One time read'},
                {name:'Yashi',body:'good book'}
            ]
        },
        {
            title:"Atomic Habit",
            genres:['motivation','self improvement'],
            rating:8,
            pages:100,
            author:'James Clear',
            review:[
                {name:'Yoshi',body:'Nice book'},
                {name:'Ravi',body:'Life chaning book'},
                {name:'Sumit',body:'One time read'},
                {name:'Yashi',body:'good book'}
            ]
        },
        {
            title:"How to win friends and influence them",
            genres:['motivation','self impro','habit'],
            rating:2,
            pages:560,
            author:'James Clear',
            review:[
                {name:'Yoshi',body:'Nice book'},
                {name:'Ravi',body:'Life chaning book'},
                {name:'Sumit',body:'One time read'},
                {name:'Yashi',body:'good book'}
            ]
        },
        {
            title:"Think and grow rich",
            genres:['motivation','self improvement'],
            rating:6,
            pages:100,
            author:'James Clear',
            review:[
                {name:'Yoshi',body:'Nice book'},
                {name:'Ravi',body:'Life chaning book'},
                {name:'Sumit',body:'One time read'},
                {name:'Yashi',body:'good book'}
            ]
        },
    ])

--> db.books.find({add conditions here},{select fields here})
    -> used to show multiples items
--> findOne({})
    -> used to show one record only
--> findById(id)
    -> used to show one record which matched id .
--> find().count()
    --> show to number of records/collections
--> find().limit(3)
    --> show three record only
--> find().limit(3).count()
    -> 3
--> find().sort({createdAt:-1}).limit(10) // this is know as method chaining
    -> used to sort records based on value (-1 desending order)&(1 ascending order)

# Nest documents: 
--> db.books.insertOne({
    title:"Atomi Habit",
    pages:414,
    genres:['Habit','Self-Improvement'],
    rating:8,
    author:'James Clear',
    review:[
            {name:'Yoshi',body:'Nice book'},
            {name:'Ravi',body:'Life chaning book'},
            {name:'Sumit',body:'One time read'},
            {name:'Yashi',body:'good book'}
        ]
})

# Operators & Complex Queries: -
--> db.books.find({rating:{$gt:7}}) 
    -> find all books who's rating is more than 7
--> db.books.find({rating:{$lte:4}})
    -> find all records which is less and equal to 4
--> db.books.find({rating:{$lt:4}})
    -> find all records which are less than 4
--> db.books.find({rating:{$lte:6,author:"ravi"}})
    --> wil show all records who's author is "ravi" and rating is <= 6
--> db.books.find({$or:[{rating:{$gt:4}},{rating:2},{author:"ravi"}]})
--> db.books.find({rating:{$in:[6,2,5]}})
    -> find all books who's rating is 6,2 or 5
--> db.books.find({rating:{$nin:[6,2,5]}})
    -> find all books who's rating not is 6,2 or 5
--> db.books.find({genres:"motivation"})
    -> find all books who's genres is motivation (here genres is an array)
    -> "motivation" searched in genres array and find any match then it return the 
       result
--> db.books.find({genres:["magic"]})
    -> find who's record who genres is exact "magic" value in it.

--> db.books.find({genres:["magic","fancy"]})
    -> find who's record who genres is exact "magic" and "fancy" value in it.
--> db.books.find({genres:{$all:['fancy','sci-fi']}})
    -> show all records who's genres is 'fancy' and 'sci-fi' event some other genres
       comes within it , query still returns the records
--> db.books.find({"review.name":"Yashi"})
    -> find all records who's name is in Yashi in "review" collection which is   
       inside the books collection
--> deleteOne , deleteMany all these work like find the only difference is , it will
    delete the records

--> updateOne({conditions},{$set:{document data to be updated}})
    -> update only single record
--> updateMany({conditions},{$set:{documents data you want to update}})
    -> update multiples records 
    -> instead of changing values you can increment/ decrement values
--> db.books.updateOne({_id:ObjectId('qwertyui345')},{$pull:{genres:'fantsy'}})
    -> it query will pull/remove fantasy from genres array 
    -> same way we can push the fields
--> db.books.updateOne({_id:ObjectId('qwertyui345')},{$push:{genres:{$each:["sci-fi",
    'action','comedy]}}})
    -> used to push multiple items at once

# Indexes : -
    -> If you want to access any record from a collection , by default query go
        through each and every record of the collection and then the response time get increased .
    -> Index in database is just like book 
    -> each index point to a single document
    -> if we set index is rating and find rating which have 10 value then mongodb 
       only looks for the  rating who has 10 value and skip all other values.
    -> this indexing increase the query speed and user get the response quickly
    -> hence index is used to decrease query time when you have large number of 
       collection and show the data in efficient way .
    -> db.collection.find({rating:10}).explain('executionStats')
        // this will explain stats of query
    -> db.collectionName.createIndex({rating:8}) // create a index
    -> db.collectionName.getIndexes() // show all indexes
    -> db.collectionName.dropIndex({rating:8})