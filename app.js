require('./db/connect')

const express = require("express");
const tasks = require("./routes/tasks")
const bodyParser = require("body-parser");

//Initialize app
const app = express();

//PORT
const PORT = 5500;

//middleware
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Requests Handling and Route forwarding
app.use('/api/v1/tasks',tasks);

//Server Listening
app.listen(PORT,()=>console.log(`Listening on port ${PORT}...`));