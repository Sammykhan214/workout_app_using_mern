const express = require('express')
const {getWorkouts, createWorkout, getWorkout, delWorkout, updateWorkout} = require('../controllers/workoutController')

const router = express.Router()

router.get('/',getWorkouts)

router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', delWorkout)

router.patch('/:id', updateWorkout)

module.exports = router