const express = require("express");
const tasks = require("./routes/tasks")
const bodyParser = require("body-parser");
const connectDB = require('./db/connect')
require('dotenv').config()

//Initialize app
const app = express();


//middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//PORT
const PORT = 5500;

const start = async()=>{
    try{
        //Connect To Database
        await connectDB(process.env.MONGO_URI)
        //Start Server
        app.listen(PORT,()=>console.log(`Listening on port ${PORT}...`)); 
    }
    catch(error){
        console.log(error)
    }
}


//Requests Handling and Route forwarding
app.use('/api/v1/tasks',tasks);

start()