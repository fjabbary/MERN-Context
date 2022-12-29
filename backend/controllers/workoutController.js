const mongoose = require('mongoose');
const workoutModel = require('../models/workoutModel.js')

const getAllWorkouts = async (req, res) => {
    const allWorkouts = await workoutModel.find({}).sort({ createdAt: -1 })
    res.json(allWorkouts)
}

const getWorkout = async (req, res) => {
    const { id } = req.params;
    const workout = await workoutModel.findById(id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Id is not valid' })
    }

    res.json(workout)
}

const addWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    const newWorkout = { title, reps, load }
    await workoutModel.create(newWorkout)

    res.status(200).json(workoutModel)
}

const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    const workout = await workoutModel.findByIdAndRemove(id).exec()
    res.json(workout)
}

const updateWorkout = async (req, res) => {
    const { id } = req.params;
    const workout = await workoutModel.findByIdAndUpdate({ _id: id }, { ...req.body })
    res.send(workout)
}

module.exports = {
    getAllWorkouts,
    getWorkout,
    addWorkout,
    deleteWorkout,
    updateWorkout
}