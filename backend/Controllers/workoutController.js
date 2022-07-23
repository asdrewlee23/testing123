const Workout = require('../Models/workoutModel')
const mongoose= require('mongoose')

//get all workouts
const getWorkouts = async(req,res)=>{
    const workouts = await Workout.find({}).sort({createdAt: -1})

    res.status(200).json(workouts)
}
//get single workout
const getWorkout = async(req,res)=>{
    //load the id from params
    const {id} = req.params
    // check the type of id if it is correct
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
        //find the id from db
    const workout = await Workout.findById(id)

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}
//create a new workout
const createWorkout = async(req,res)=>{
    const {title,load,reps} = req.body
    //add to db
    try{
        const workout = await Workout.create({title,load,reps})
        res.status(200).json(workout)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workout
const deleteWorkout = async(req,res)=>{
    //load the id from params
    const {id} = req.params
    // check the type of id if it is correct
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    //find the id from db
    const workout = await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}

//update a workout
const updateWorkout = async(req,res)=>{
    //load the id from params
    const {id} = req.params
    // check the type of id if it is correct
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout"})
    }
    //find the id from db
    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body})

    if(!workout){
        return res.status(404).json({error: 'No such workout'})
    }
    res.status(200).json(workout)
}  

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}