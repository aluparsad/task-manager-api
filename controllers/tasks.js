const Task = require("../models/Task")

//Queries


const getAllTasks =async (req,res) =>{
    try{
        const data = await Task.find({})
        res.status(201).json(data)
    }
    catch(error){
        res.status(500).json({msg:error})

    }
}

const createTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({msg:error})
    }

}

const getTask = async(req,res)=>{
    try{
        const data = await Task.find({_id:req.params.id})
        res.status(201).json({data})
    }
    catch(error){
        res.status(404).json({msg:error})
    }
}

const updateTask = async (req,res)=>{
    try{
        const query = {"_id":req.params.id}
        const data = await Task.updateOne(query,req.body)
        res.status(201).json({"updated":data})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}

const deleteTask = async (req,res)=>{
    try{
        const data = await Task.deleteOne({_id:req.params.id})
        res.status(200).send(data)  
    }
    catch(error){
        res.status(500).json({error})
    }
}

module.exports = {getAllTasks,createTask, getTask, updateTask, deleteTask,}