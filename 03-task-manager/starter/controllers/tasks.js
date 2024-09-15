const Task =  require('../models/Task') 
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')


exports.getAllTasks = asyncWrapper(async(req,res) => {
    // try{        this try catch removed by asyncWrapper
        const tasks = await Task.find({})
        res.status(200).json({tasks:tasks})  //with ES6 we can just shorten this up and write tasks only
    // } catch(error) {
    //     res.status(500).json({msg:error})
    // }
})

exports.createTask = asyncWrapper(async (req,res) => {
    // try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    // } catch(error) {
    //     res6+
    .status(500).json({msg:error})
    // }
})

exports.getTask = asyncWrapper(async (req,res,next) => {
    // try{
        const {id:taskID} = req.params    //ye kya kiya yha pr id aise kyu nhi const taskID = req.params.id
        const task = await Task.findOne({_id:taskID})
        if(!task){
            // const error = new Error('Not Found')
            // error.status = 404
            // return next(error)
            return next(createCustomError (`No task with ID : ${taskID}`, 404))
            // return res.status(404).json({msg:`No task with ID : ${taskID}`})
        }
        res.status(200).json({task})
    // } catch(error){
    //     res.status(500).json({msg:error})
    // }
})


exports.deleteTask = asyncWrapper(async(req,res) => {
    // try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return next(createCustomError (`No task with ID : ${taskID}`, 404))
        }
        res.status(200).json({task})
    // } catch(error){
    //     res.status(500).json({msg:error})
    // }
    
})
exports.updateTask = asyncWrapper(async (req,res) => {
    // try{
        const{id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id :taskID}, req.body, {
            new:true,
            runValidators: true,
        })
        if(!task){
            return next(createCustomError (`No task with ID : ${taskID}`, 404))
        }
        res.status(200).json({task})
    // }catch(error) {
    //     res.status(500).json({msg:error})
    // }
})