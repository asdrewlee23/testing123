const express =require('express')
const {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout} = require("../Controllers/workoutController")

const router = express.Router()

//Get all workouts
router.get('/',getWorkouts)

//Get single workout
router.get('/:id',getWorkout)

//post a new workout (run the createWorkout function on workoutController)
router.post('/',createWorkout)

//delete single workout

router.delete('/:id',deleteWorkout)

//update single workout
router.patch('/:id',updateWorkout)
module.exports = router