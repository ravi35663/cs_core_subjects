// Getting Started with MongoDB and NodeJS
/*
==> What is MongoDB?
    ->  MongoDB is a NoSQL database that uses a flexible, document-oriented data model, allowing for 
        easy storage of structured or semi-structured data.

==> Key Features:
    1)  Scalability: MongoDB is designed to scale out across distributed systems.
    2)  Flexibility: The document model allows for changes to data structure over time without needing 
        to redefine schemas.
    3)  Performance: Optimized for high-volume data storage and retrieval.
*/

/*
Why Use MongoDB?
    1)  JSON-like Documents: MongoDB stores data in flexible, JSON-like documents, making it easy to 
        work with and integrate with modern applications.

    2)  Schema-less: MongoDB doesn’t require a predefined schema, allowing for dynamic changes in data 
        structures.

    3)  Scalability: Built to scale horizontally by distributing data across multiple servers.

    4)  Community Support: MongoDB has a large and active community, with comprehensive documentation 
        and a wealth of resources.


==> Basic MongoDB Terminologies:
    1)  Document: A record in MongoDB, similar to a row in relational databases, stored in 
        BSON (Binary JSON) format.
    2)  Collection: A group of documents, similar to a table in relational databases.
    3)  Database: A container for collections.
    4)  Index: A data structure that improves the speed of data retrieval operations.

const mongodb_document = {
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "johndoe@example.com",
  "age": 29,
  "created_at": "2023-08-21T15:00:00Z"
  }
*/

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        const db = client.db('testdb');
        const collection = db.collection('users');
        // Perform database operations
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
    }
}

connectDB();

/*
==> What is Mongoose?
    ->  Mongoose is an Object Data Modeling (ODM)(ORM) library for MongoDB and NodeJS. It provides a 
        straightforward, schema-based solution to model application data.

    ->  Mongoose simplifies interactions with MongoDB by providing schema validation, middleware, and 
        a convenient API for database operations.

    const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB using Mongoose');
    }).catch(err => {
        console.error('Error connecting to MongoDB', err);
    });


    // Basic CRUD Operations with MongoDB and Mongoose:
    Creating a Schema and Model:
    const mongoose = require('mongoose');

    // Schema
    const userSchema = new mongoose.Schema({
        name: String,
        email: String,
        age: Number,
        created_at: {
            type: Date,
            default: Date.now
        }
    }, { timestamps: true }); // Result: Automatically adds createdAt and updatedAt fields to the schema.

    const User = mongoose.model('User', userSchema); // User is model
*/