const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5000;
const noteroutes = require('./routes/noteroutes');
const connectDB = require('./db/connect');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/notes', noteroutes);

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"hello welcome to Notes API ",
        "How to use?": "for details on how to use the API view the documentaion provided in the readme.md file",
        "routes":{
            "GET":{
                "endpoint":"http://localhost:5000/api/notes/",
                "usage":"To get all notes"
            },
            "POST":{
                "endpoint":"http://localhost:5000/api/notes/",
                "usage":"To create a note"
            },
            "PATCH":{
                "endpoint":"http://localhost:5000/api/notes/:id",
                "usage":"To update existing note"
            },
            "DELETE":{
                "endpoint":"http://localhost:5000/api/notes/:id",
                "usage":"To delete a note"
            },
        }
    });
})

const start= async(req,res)=>{
    try{
        await connectDB(process.env.MONGO_URL);
        app.listen(port,()=>{
            console.log(`server running on port ${port}`);
        });
    }catch(e){
        console.log(e);
    }
};

start();