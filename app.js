const express = require("express");
const tasks = require("./routes/tasks")
const bodyParser = require("body-parser");
const connectDB = require('./db/connect')
require('dotenv').config()

//Initialize app
const app = express();

//PORT
const PORT = 5500;

//middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({ extended: true }));


//Requests Handling and Route forwarding
app.use('/api/v1/tasks',tasks);


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

start()