const getAllTasks = (req,res) =>{
    res.send('All Items')
}

const createTask = (req,res)=>{
    res.json("Create Task Request")
}

const getTask = (req,res)=>{
    res.json({id:req.params.id})
}

const updateTask = (req,res)=>{
    res.send("update task")
}

const deleteTask = (req,res)=>{
    res.send("delete task")
}

module.exports = {getAllTasks,createTask, getTask, updateTask, deleteTask,}