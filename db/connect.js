const mongoose = require("mongoose")

const connectionString = "mongodb+srv://aluparsad:ysyogesh4444@nodeexpessprojects.nxdgr.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority"

mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log(`Connected to the DB...`))
.catch(err=>console.log(err))